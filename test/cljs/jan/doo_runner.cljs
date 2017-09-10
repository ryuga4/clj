(ns jan.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [jan.core-test]))

(doo-tests 'jan.core-test)

