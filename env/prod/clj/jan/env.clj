(ns jan.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[jan started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[jan has shut down successfully]=-"))
   :middleware identity})
