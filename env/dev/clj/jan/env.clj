(ns jan.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [jan.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[jan started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[jan has shut down successfully]=-"))
   :middleware wrap-dev})
