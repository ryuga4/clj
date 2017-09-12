(ns jan.routes.ws
  (:require [compojure.core :refer [GET defroutes wrap-routes]]
            [clojure.tools.logging :as log]
            [immutant.web.async       :as async]))



(defonce rooms (atom {}))

(defn connect! [channel room]
  (log/info "channel open")
  (swap! rooms (fn [map]
                 (if (get map room)
                   (update map room conj channel)
                   (assoc map room #{channel})))))


(defn disconnect! [channel {:keys [code reason]} room]
  (log/info "close code:" code "reason:" reason)
  (swap! rooms (fn [map]
                 (update map room disj channel))))

(defn notify-clients! [channel msg room]
  (doseq [channel (get @rooms room)]
    (async/send! channel msg)))


(defn websocket-callbacks
  [room]
  "WebSocket callback functions"
  {:on-open (fn [channel] (connect! channel room))
   :on-close (fn [channel info] (disconnect! channel info room))
   :on-message (fn [channel msg] (notify-clients! channel msg room))})

(defn ws-handler [request room]  
  (async/as-channel request (websocket-callbacks room)))

(defroutes websocket-routes
  (GET "/ws/:room" [room] (fn [request] (ws-handler request room)))
  (GET "/ws" [] (fn [request] (log/info "joined default channel") (ws-handler request "default"))))
