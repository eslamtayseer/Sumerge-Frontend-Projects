import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './home/sign-in/sign-in.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingCartService } from './Shared/shopping-cart.service';
import { AccountsService } from './Accounts/accounts.service';
import { MealsService } from './Meals/meals.service';
import { AuthGaurdService } from './Shared/auth-gaur.service';
import { AuthService } from './Shared/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingListComponent,
    CheckoutComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [ShoppingCartService,AccountsService,MealsService ,AuthGaurdService,AuthService ,MealsService,ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
