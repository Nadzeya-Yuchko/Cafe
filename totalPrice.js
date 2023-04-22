function getTotalPrice(coffee, sandwich) {
      console.log(`Total price:`, coffee.getCoffeePrice() + sandwich.getSandwichPrice() + ' ' + '$')
}

export {getTotalPrice}