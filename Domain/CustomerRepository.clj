(ns CustomerRepository
  (:require [clojure.core])
  (:gen-class
    :main false
    :name Domain.CustomerRepository
    :methods
    [
      [Add [String int] String]
    ]
    :constructors { [] [] }))

;implementation

(defn -Add [this name age] (str "Customer's name is: " name " and customer's age is: " age))