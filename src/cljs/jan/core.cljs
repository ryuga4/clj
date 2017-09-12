(ns jan.core
  (:require [reagent.core :as r :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [jan.ajax :refer [load-interceptors!]]
            [ajax.core :refer [GET POST]]
            [jan.ws :as ws]
            [play-cljs.core :as p]
            )
  (:import goog.History))

;; -----------------------
;; Logic

(defonce messages (atom []))

(defn update-messages! [{:keys [message]}]
  (println message)
  (swap! messages #(take 10 (cons message %))))


;;;;

(defonce game (p/create-game 1000  1000))
(defonce state (atom {}))

; define a screen, where all the action takes place
(def main-screen
  (reify p/Screen
  
    ; runs when the screen is first shown
    (on-show [this]
      ; start the state map with the x and y position of the text we want to display
      (reset! state {:text-x 20 :text-y 30}))

    ; runs when the screen is hidden
    (on-hide [this])

    ; runs every time a frame must be drawn (about 60 times per sec)
    (on-render [this]
      ; we use `render` to display a light blue background and black text
      ; as you can see, everything is specified as a hiccup-style data structure
      (p/render game
        [[:fill {:color "lightblue"}
          [:rect {:x 0 :y 0 :width 1000 :height 1000}]]
         [:fill {:color "black"}
          [:text {:value "Hello, world!" :x (:text-x @state) :y (:text-y @state) :size 16 :font "Georgia" :style :italic}]]])
      ; increment the x position of the text so it scrolls to the right
      (swap! state update :text-x inc))))

; start the game
(doto game
  (p/start)
  (p/set-screen main-screen))
;;;


;; ---------------------
;; DOM

(defn message-list []
  [:ul
   (for [[i message] (map-indexed vector @messages)]
     ^{:key i}
     [:li message])])

(defn message-input []
  (let [value (atom nil)]
    (fn []
      [:input.form-control
       {:type :text
        :placeholder "type in a message and press enter"
        :value @value
        :on-change #(reset! value (-> % .-target .-value))
        :on-key-down
        #(when (= (.-keyCode %) 13)
           (ws/send-transit-msg!
            {:message @value})
           (reset! value nil))}])))

(defn home-page []
  [:div ])

(def pages
  {:home #'home-page
   })

(defn page []
  [(pages (session/get :page))])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :page :home))

(secretary/defroute "/about" []
  (session/put! :page :about))
  
;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
        (events/listen
          HistoryEventType/NAVIGATE
          (fn [event]
              (secretary/dispatch! (.-token event))))
        (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn fetch-docs! []
  (GET "/docs" {:handler #(session/put! :docs %)}))

(defn mount-components []
  ;(r/render [#'navbar] (.getElementById js/document "navbar"))
  (r/render [#'page] (.getElementById js/document "app"))
  )

(defn init! []
  (load-interceptors!)
  (fetch-docs!)
  (hook-browser-navigation!)
  (ws/make-websocket! (str "ws://" (.-host js/location) "/ws") update-messages!) 
  (mount-components))
