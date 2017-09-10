(ns user
  (:require [mount.core :as mount]
            [jan.figwheel :refer [start-fw stop-fw cljs]]
            jan.core))

(defn start []
  (mount/start-without #'jan.core/repl-server))

(defn stop []
  (mount/stop-except #'jan.core/repl-server))

(defn restart []
  (stop)
  (start))


