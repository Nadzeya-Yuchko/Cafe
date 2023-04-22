import Coffee from "./typeOfCoffee.js"
import Sandwich from "./typeOfSandwich.js"

/* Need to type name: 'espresso', 'cappuccino' or 'latte'
 size: 'small', 'medium' or 'big' 
 number of cup: 'figure' 
 kind of milk: 'cow' or 'almond' (default - cow)
 sugar: 'yes' or 'no'  (default - no) */

let coffee = new Coffee('espresso', 'small', '3', '', 'yes')
coffee.chooseCoffee()

/* Need to type name: 'hum', 'chicken' or 'veg'
 kind of bread: 'white' or 'rye' 
 temperature of sandwich: 'ordinary' or 'hot' 
 number of sandwiches: 'figure' */

let sandwich = new Sandwich('chicken', 'white', 'hot', '2')
sandwich.chooseSandwich()

export {coffee, sandwich}