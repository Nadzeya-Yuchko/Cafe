function getTotalPrice(coffee, sandwich) {
      if (Number.isNaN(coffee.getCoffeePrice()) == false ) {
            console.log(`Total price:`, coffee.getCoffeePrice() + sandwich.getSandwichPrice() + ' ' + '$')
      } else if (Number.isNaN(coffee.getCoffeePrice())) {
            console.log(`Total price:`, sandwich.getSandwichPrice() + ' ' + '$')
      }
}

export {getTotalPrice}