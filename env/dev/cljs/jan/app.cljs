(ns ^:figwheel-no-load jan.app
  (:require [jan.core :as core]
            [devtools.core :as devtools]))

(enable-console-print!)

(devtools/install!)

(core/init!)
