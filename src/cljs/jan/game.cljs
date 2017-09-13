(ns jan.game
  (:require [reagent.core :as r :refer [atom]]
            [play-cljs.core :as p]))


(def size (atom {:width (.-innerWidth js/window)
                 :height (.-innerHeight js/window)}))
(defonce game (p/create-game (:width @size) (:height @size)))
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
          [:rect {:x 0 :y 0 :width (:width @size) :height (:height @size)}]]
         [:fill {:color "black"}
          [:text {:value "Hello, world!" :x (:text-x @state) :y (:text-y @state) :size 16 :font "Georgia" :style :italic}]]])
      ; increment the x position of the text so it scrolls to the right
      (swap! state update :text-x inc))))

; start the game
(defn start []
  (doto game
    (p/start)
    (p/set-screen main-screen)))
;;;
