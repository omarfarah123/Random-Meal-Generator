const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
  
  get appetizers(){
    return this._appetizers;
  },
    get mains(){
    return this._mains;
  },
    get desserts(){
    return this._desserts;
  },
  set appetizers (appetizers){
    this._appetizers = appetizers;
  },
  set mains(mains){
    this._mains = mains;
  },
  set desserts(desserts){
    this._desserts = desserts; 
  },
  }, 
  get courses(){
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    };
  },
  addDishToCourse (courseName, dishName, dishPrice){
    const dish = {
       name: dishName,
       price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main  = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}... The price is $${totalPrice.toFixed(2)}.`;
  }
};

menu.addDishToCourse("appetizers", "fries", 2.00);
menu.addDishToCourse("appetizers", "wings", 1.40);
menu.addDishToCourse("appetizers", "salad", 1.20);

menu.addDishToCourse("mains", "steak", 3.00);
menu.addDishToCourse("mains", "salmon", 3.40);
menu.addDishToCourse("mains", "sea food", 2.90);

menu.addDishToCourse("desserts", "cake", 2.00);
menu.addDishToCourse("desserts", "ice cream", 1.69);
menu.addDishToCourse("desserts", "cookie", 1.10);

const meal = menu.generateRandomMeal();
console.log('                Welcome to Omars Kitchen')
console.log('              ----------------------------')


console.log(meal);

