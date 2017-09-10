(ns jan.handler
  (:require [compojure.core :refer [routes wrap-routes]]
            [jan.layout :refer [error-page]]
            [jan.routes.home :refer [home-routes]]
            [compojure.route :as route]
            [jan.env :refer [defaults]]
            [mount.core :as mount]
            [jan.middleware :as middleware]
            [jan.routes.ws :refer [websocket-routes]]))

(mount/defstate init-app
                :start ((or (:init defaults) identity))
                :stop  ((or (:stop defaults) identity)))

(def app-routes
  (routes
   (-> #'home-routes
        (wrap-routes middleware/wrap-csrf)
        (wrap-routes middleware/wrap-formats))
   websocket-routes
    (route/not-found
      (:body
        (error-page {:status 404
                     :title "page not found"})))))


(defn app [] (middleware/wrap-base #'app-routes))
