function espressoRecipe() {
      let espresso = `1. Turn on the espresso machine.
2. Wipe the portafilter with a clean, dry cloth. 
3. Dose the coffee grounds into the portafilter. 
4. Level the dose and tamp it evenly.
5. Flush the group head. 
6. Attach the portafilter and immediately start the brewing.
7. Place the cups below the portafilter spouts.`
      return espresso
}

function cappuccinoRecipe() {
      let cappuccino = `8. Pour milk to the pitcher.
9. Your machine will have built-up steam that you can now release using the steam wand. 
Purge the steam wand and pull it to far up and straight position. 
Place the pitcher so that the nozzle is aligned to the steam wand. 
Make sure the steam wand nozzle is in the middle of the pitcher and just below the milk surface. 
Tilt the pitcher a bit to optimize the whilrpool later on.
10.Switch on the steam wand. Create froth for the first couple of second (up until the milk has reached 37 c). 
While froth is created, the volume of the milk increases so be sure to have the steam wand nozzle close to the milk surface all the way through.
The longer you keep the nozzle close to milk surface the more froth you will create. 
11. When you have reached 37 c, rise the pitcher a bit so that the nozzle gets deeper into milk.
Make sure the nozzle does not touch the bottom of the pitcher! 
12. Find a perrfect position where the whilrpool of milk is created. 
Keep warming the milk until it reaches +55-62 c.
13. Slowly pour the milk into the cappuccino cup on top of the espresso.
14. On top put a layer of foam as thick as a layer of milk`
      return espressoRecipe() + '\n' + cappuccino
}

function latteRecipe() {
      let latte = `8. Pour milk to the pitcher.
9. Purge the steam wand and pull it to far up and straight position. 
Place the pitcher so that the nozzle is aligned to the steam wand. 
Make sure the steam wand nozzle is in the middle of the pitcher and just below the milk surface. 
Tilt the pitcher a bit to optimize the whilrpool later on.
10. Swith on the steam wand. Start with the nozzle just below the surface but after a second or two rise the pitcher a bit so that the nozzle gets deeper into milk. 
Make sure the nozzle does not touch the bottom of the pitcher! 
11. Find a perfect position where the whilrpool of milk is created. 
Keep warming the milk until it reaches +55-62 c. 
12. Slowly pour the milk into the latte glass on top of the espresso
13. Put a thin layer of foam on top`
      return espressoRecipe() + '\n' + latte
}

function choosenRecipe(name) {
      switch (name) {
            case 'espresso':
                  return espressoRecipe();
            case 'cappuccino':
                  return cappuccinoRecipe();
            case 'latte':
                  return latteRecipe();
      }
}

const ingredients = {
      espresso: ['water', 'coffee', 'milk'],
      cappuccino: ['water', 'coffee', 'milk'],
      latte: ['water', 'coffee', 'milk'],
      sugar: {
            yes: '2 sachets',
            no: 'sugar-free',
      },
      milk: {
            cow: `cow's milk`,
            almond: 'almond milk',
      },
      showIngredients(name) {
            console.log(`Ingredients:`, ingredients[name].join(', '))
      }
}

const price = {
      currency: '$',
      priceSmall: 3,
      priceMedium: 5,
      priceBig: 6
}

function priceCoffe(size) {
      switch (size) {
            case 'small':
                  return price['priceSmall'];
            case 'medium':
                  return price['priceMedium'];
            case 'big':
                  return price['priceBig'];
            default:
                  return `small size ${price['priceSmall']} ${price.currency}, 
      medium size ${price['priceMedium']} ${price.currency},
      big size ${price['priceBig']} ${price.currency}`
      }
}

export default class Coffee {
      constructor(name, size, number, milk, sugar) {
            this.name = name;
            this.size = size;
            this.price = priceCoffe(size);
            this.number = number;
            this.milk = milk;
            this.sugar = sugar;
      }

      getCoffeePrice() {
            let totalCoffeePrice = this.price * this.number
            return totalCoffeePrice
      }

      chooseCoffee() {
            if (this.name == 'espresso' || this.name == 'cappuccino' || this.name == 'latte') {
                  console.log(`Choosen coffee: ${this.name}.`)
            } else {
                  console.log(`You can order espresso, cappuccino or latte`)
            }

            if (this.size == 'small' || this.size == 'medium' || this.size == 'big') {
                  console.log(`Choosen size: ${this.size}.`);
            } else {
                  console.log(`You can choose small, medium or big size`)
            }

            if (this.number > 0) {
                  console.log(`Number of cup:`, this.number)
                  console.log(`Price:`, this.getCoffeePrice(), price.currency + '\n')
            } else {
                  console.log(`You need to choose numbers of cup.`)
            }

            if (this.name == 'espresso' || this.name == 'cappuccino' || this.name == 'latte') {
                  if (this.milk == 'cow' || this.milk == 'almond') {
                        console.log(`Kind of milk:`, ingredients.milk[this.milk])
                  } else { console.log(`Kind of milk:`, ingredients.milk.cow) }
            } else {console.log(`You can choose cow's or almond milk`)}

            if (this.name == 'espresso' || this.name == 'cappuccino' || this.name == 'latte') {
                  ingredients.showIngredients(this.name)
            }

            if (this.name == 'espresso' || this.name == 'cappuccino' || this.name == 'latte') {
                  if (this.sugar == 'yes' || this.sugar == 'no') {
                        console.log(`Sugar:`, ingredients.sugar[this.sugar])
                  } else { console.log(`Sugar:`, ingredients.sugar.no) }
            } else {
                  console.log(`You can add a sugar`)
            }
            console.log('----------------------')
      }
      cookCoffee() {
            if (this.name == 'espresso' || this.name == 'cappuccino' || this.name == 'latte') {
                  console.log(`${this.name}. Recipe step by step.\n `.toUpperCase())
            } else { console.log(`There will be shown recipe of coffee`) }

            console.log(choosenRecipe(this.name), `\n Coffee is ready! \n`)
      }
}
