import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from '../Meals/meal.model';
import { MealsService } from '../Meals/meals.service';
import { ShoppingCartService } from '../Shared/shopping-cart.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  meals :Meal[] =this.mealsService.getMeals()
  // @ViewChild('mealsList',{static:true}) mealsList:ElementRef
  mealQuantities :string[]=["0","0",'0','0','0']
  constructor(private mealsService:MealsService,private shoppinCartService:ShoppingCartService,private router:Router) { }

  ngOnInit(): void {
    // this.meals=this.mealsService.getMeals()
    // console.log(this.mealsList)
    // var listItems =this.mealsList.nativeElement.children
    // console.log(listItems)
    // for(var listItem of listItems){
    //   let itemName = listItem.children[1].children[0].value
    //   console.log(itemName)
    // }

   

  }
  onAddToCart(){
    for(var i=0;i<this.mealQuantities.length;i++ ){
      if(!this.checkForCorrectInput(this.mealQuantities[i])){
        alert('Please enter a valid number')
      }
      if(+this.mealQuantities[i]>0){
        // console.log(this.mealQuantities[i])
        this.shoppinCartService.addToCart(this.meals[i],+this.mealQuantities[i])
      }
    }
    this.router.navigate(['/checkout'])

  }
  checkForCorrectInput(input:string){
    return true //to be done
  }

  // onCheckOut(){

  // }
}
