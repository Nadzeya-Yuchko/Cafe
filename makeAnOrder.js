import Coffee from "./typeOfCoffee.js"
import Sandwich from "./typeOfSandwich.js"

/* Need to type name: 'espresso', 'cappuccino' or 'latte'
 and size: 'small', 'medium' or 'big'  */

let coffee = new Coffee('espresso', 'small')   
coffee.chooseCoffee()

/* Need to type name: 'hum', 'chicken' or 'veg'
 kind of bread: 'white' or 'rye' 
 temperature of sandwich: 'ordinary' or 'hot'  */

let sandwich = new Sandwich('chicken', 'white', 'hot')
sandwich.chooseSandwich()
