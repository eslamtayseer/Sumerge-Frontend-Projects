import { Meal } from './meal.model';

export class MealsService{
   private meals:Meal[]=[
       {name:"Large Chicken BBQ Pizza",price: 150,imagePath:"assets/images/pizza.png"},
       {name:"Medium Cheese Burger",price: 100,imagePath:"assets/images/burger.png"},
       {name:"Red Sauce Pasta",price: 50,imagePath:"assets/images/Past.png"},
       {name:"Sushi Meal",price: 400,imagePath:"assets/images/sushi.png"},
       {name:"Taco",price: 75,imagePath:"assets/images/taco.png"},

   ]

   getMeals(){
      return this.meals.slice()
   }
   getMealByName(name:string){
      
   }
}

export interface OrderdMeal{
   meal:Meal
   quantity: number
}