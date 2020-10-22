import { Injectable } from '@angular/core';
import { Meal } from '../Meals/meal.model';
import { OrderdMeal } from '../Meals/meals.service';

@Injectable()
export class ShoppingCartService{
    order :OrderdMeal[]=[]

    addToCart(meal:Meal,quantity:number){
    var orderMeal = this.order.filter(orderMeal => (orderMeal.meal===meal))
       if( orderMeal.length>0) {
        orderMeal[0].quantity+=quantity
       }
       else{
           this.order.push({meal,quantity})
       }
    }
}