import Coffee from "./typeOfCoffee.js"
import Sandwich from "./typeOfSandwich.js"
import { getTotalPrice } from "./totalPrice.js"

/* Need to type name: 'espresso', 'cappuccino' or 'latte'
 size: 'small', 'medium' or 'big' 
 number of cup: 'figure' 
 kind of milk: 'cow' or 'almond' (default - cow)
 sugar: 'yes' or 'no'  (default - no) */

let coffee = new Coffee('cappuccino', 'medium', '1', 'almond', 'yes')
coffee.chooseCoffee()

/* Need to type name: 'ham', 'chicken' or 'veg'
 kind of bread: 'white' or 'rye' 
 temperature of sandwich: 'ordinary' or 'hot' 
 number of sandwiches: 'figure' */

let sandwich = new Sandwich('ham', 'rye', 'hot', '1')
sandwich.chooseSandwich()


/* Return total price */
console.log('----------------------')
getTotalPrice(coffee, sandwich)
console.log('----------------------')
console.log('')
export { coffee, sandwich }

