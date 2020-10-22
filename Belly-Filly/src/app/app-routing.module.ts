import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { AuthGaurdService } from './Shared/auth-gaur.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes:Routes =[
    // {path:"",component:HomeComponent},
    // {path:"servers",
    // // canActivate:[AuthGaurdService],
    // canActivateChild:[AuthGaurdService],
    // component:ServersComponent, children:[
    //   {path:":id/edit",component:EditServerComponent ,canDeactivate:[CanDeactivateGaurd] },
    //   {path:":id",component:ServerComponent ,resolve:{server:ServerResolver}}
    // ]},
    // {path:"users",component:UsersComponent,children:[
    //   {path:":id/:name",component:UserComponent}
    // ]},
    // // {path:"not-found",component:PageNotFoundComponent},
    // {path:"not-found",component:ErrorPageComponent , data:{message:'Page not found!'}},

    // {path:"**",redirectTo:"not-found"},
    {path:"",component:HomeComponent ,canActivate:[AuthGaurdService],data:{source:'home-page'}},
    {path:"shoppinglist",component:ShoppingListComponent ,canActivate:[AuthGaurdService],data:{source:'protected-page'}},
    {path:"checkout",component:CheckoutComponent ,canActivate:[AuthGaurdService] ,data:{source:'protected-page'}},
    {path:"not-found",component:HomeComponent , canActivate:[AuthGaurdService] , data:{source:'not-found'}},
    {path:"**",redirectTo:"not-found"},

  
  ]
  @NgModule(
      {
          imports:[
        RouterModule.forRoot(routes)

          ],
          exports:[RouterModule]
      }
  )
export class AppRoutingModule{

}