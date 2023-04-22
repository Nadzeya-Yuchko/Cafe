const hamSandwich = {
      nameSandwich: 'Ham and cheese sandwich',
      price: 3,
      currency: '$',
      kindOfBread: {
            white: 'white bread',
            rye: 'rye bread',
      },
      ingredients: ['bread', 'ham', 'cheese', `cow's butter`, 'lettuce'],
      showIngredients() {
            console.log(`Ingredients:`, hamSandwich.ingredients.join(', '))
      },
      getSandwichRecipe() {
            let hamSandwichRecipe = `1. Get 2 pieces of bread.
2. Spread one piece of bread with a thin layer of butter.
3. Put 2 pieces of cheese on top.
4. Put 2 pieces of ham on top.
5. Put lettuce on top.
6. Put second piece of bread on top.`
            console.log(hamSandwichRecipe)
      }
}

const chickenSandwich = {
      nameSandwich: 'Chicken sandwich',
      price: 4,
      currency: '$',
      kindOfBread: {
            white: 'white bread',
            rye: 'rye bread',
      },
      ingredients: ['bread', 'boiled chicken', 'tomatoes', 'sauce'],
      showIngredients() {
            console.log(`Ingredients:`, chickenSandwich.ingredients.join(', '))
      },
      getSandwichRecipe() {
            let chickenSandwichRecipe = `1. Get 2 pieces of bread.
2. Put 1 pieces of chicken on top.
3. Add a thin layer of sauce on top of the chicken
4. Put 2 pieces of tomato on top.
5. Put second piece of bread on top.`
            console.log(chickenSandwichRecipe)
      }
}

const vegSandwich = {
      nameSandwich: 'Veg sandwich',
      price: 2.5,
      currency: '$',
      kindOfBread: {
            white: 'white bread',
            rye: 'rye bread',
      },
      ingredients: ['bread', 'frozen mixed vegetables(asparagus beans, corn, green peas, carrots)', 'lettuce', 'salt', 'spices', 'sunflower oil'],
      showIngredients() {
            console.log(`Ingredients:`, vegSandwich.ingredients.join(', '))
      },
      getSandwichRecipe() {
            let vegSandwichRecipe = `1. Pour a little sunflower oil into the pan and heat it up.
2. Add 50 g frozen mixed vegetables to the pan, add salt and spices.
3. Fry vegetables for 10 minutes, stirring occasionally.
4. Get 2 pieces of bread.
5. Put the prepared vegetable mixture on one piece of bread
6. Put lettuce on top.
7. Put second piece of bread on top.`
            console.log(vegSandwichRecipe)
      }
}

const kindOfSandwich = {
      ham: hamSandwich,
      chicken: chickenSandwich,
      veg: vegSandwich,
}

function chooseTemperature(tempetarure) {
      if (tempetarure == 'ordinary') {
            console.log(`\n You don't need to reheat the sandwich. 
      1. Place sandwich a paper bag.
      2. The sandwich is ready!`)
      }
      else if (tempetarure == 'hot') {
            console.log(`\n Need to warm up the sandwich.
      1. Place the sandwich on the grill for 1 minute. 
      2. Remove the sandwich from the grill and place in a paper bag.
      3. The sandwich is ready!`)
      }
      else {console.log (`You can choose temperature of sandwich: ordinary or hot`)}
}


export default class Sandwich {
      constructor(name, bread, temperature, number) {
            if (name == 'ham' || name == 'chicken' || name == 'veg') {
                  this.name = kindOfSandwich[name].nameSandwich
            } else { this.name = 'You need to choose sandwich' };

            if ((name == 'ham' || name == 'chicken' || name == 'veg') && (bread == 'white' || bread == 'rye')) {
                  this.bread = kindOfSandwich[name].kindOfBread[bread]    
            } else {this.bread = 'something bread'};

            this.temperature = temperature;
            this.number = number           
      }

      getSandwichPrice() {
            const words = this.name.toLowerCase().split(' ')
            let totalSandwichPrice = kindOfSandwich[words[0]].price * this.number
            return totalSandwichPrice
      }
      
      chooseSandwich() {
            const words = this.name.toLowerCase().split(' ')

            if (this.name.toLowerCase().includes('chicken') || this.name.toLowerCase().includes('ham') || this.name.toLowerCase().includes('veg')){
                  console.log(`Choosen sandwich: ${this.name}.`)      
            } else {
                  console.log(`You can order: 1. ${hamSandwich.nameSandwich}, price ${hamSandwich.price} ${hamSandwich.currency}.
            2. ${chickenSandwich.nameSandwich}, price ${chickenSandwich.price} ${chickenSandwich.currency}.
            3. ${vegSandwich.nameSandwich}, price ${vegSandwich.price} ${vegSandwich.currency}.`)
            }

            if (this.name.toLowerCase().includes('chicken') || this.name.toLowerCase().includes('ham') || this.name.toLowerCase().includes('veg')) {
                  console.log(`Number of sandwiches:`, this.number)
                  console.log(`Price:`, this.getSandwichPrice(), kindOfSandwich[words[0]].currency + '\n') 
            }

            if (this.name.toLowerCase().includes('chicken') || this.name.toLowerCase().includes('ham') ||
                  this.name.toLowerCase().includes('veg') ) {
                  if (this.bread.includes('white') || this.bread.includes('rye')) {
                        console.log(`Choosen bread: ${this.bread}`)
                  } else { console.log(`You need choose kind of bread: white or rye.`)}
            } else {
                  console.log(`You can choose kind of bread: white or rye.`)
            }

            if (this.temperature == 'ordinary' || this.temperature == 'hot') {
                  console.log (`Choosen temperarure: ${this.temperature}.`)
            } else chooseTemperature(this.temperature)   
           
            if (this.name.toLowerCase().includes('chicken') || this.name.toLowerCase().includes('ham') || this.name.toLowerCase().includes('veg')) {
                  kindOfSandwich[words[0]].showIngredients()
            }
      }

      cookSandwich() {  
            const words = this.name.toLowerCase().split(' ')
     
            if (this.name.toLowerCase().includes('chicken') || this.name.toLowerCase().includes('ham') || this.name.toLowerCase().includes('veg')) {
                  console.log(`\n ${this.name}. Recipe step by step. \n`.toUpperCase())
                  console.log(`For this sandwich, take ${this.bread}`)
                  kindOfSandwich[words[0]].getSandwichRecipe()
            } else {
                  console.log(`\n There will be shown recipe of sandwich \n`)
            }

            if (this.temperature == 'ordinary' || this.temperature == 'hot') {
                  chooseTemperature(this.temperature)
            }
           }
}

