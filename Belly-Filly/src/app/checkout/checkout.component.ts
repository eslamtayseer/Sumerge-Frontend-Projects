import { Component, OnInit } from '@angular/core';
import { OrderdMeal } from '../Meals/meals.service';
import { ShoppingCartService } from '../Shared/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  orderdMeals :OrderdMeal[]
  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {
    this.orderdMeals= this.shoppingCartService.order
    console.log(this.orderdMeals)
  }
  onPlaceOrder(){
    var totalCost =0
    for(var orderMeal of this.orderdMeals){
      totalCost+= orderMeal.quantity*orderMeal.meal.price
    }
    alert("Total Cost: "+ totalCost)
  }

}
