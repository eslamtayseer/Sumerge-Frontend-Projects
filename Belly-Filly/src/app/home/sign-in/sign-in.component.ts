import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountsService } from 'src/app/Accounts/accounts.service';
import { AuthService } from 'src/app/Shared/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email=''
  password=''
  // name=''
  constructor(private accountService :AccountsService, private authService:AuthService ,private router:Router) { }

  ngOnInit(): void {
  }

  onLogIn(){
    if(!this.accountService.validateEmail(this.email)){
      alert('Please Enter a Valid Email')
      return
    }
   var account =this.accountService.checkAccount(this.email,this.password)[0]
   if(account ==undefined) {
     alert('User Not Found')
     return
   }
  //  this.name = account.name
   console.log( "Account name "+account.name)
  //  console.log( "Account name 2 "+account.name)
   this.authService.logIn(account.name)
   this.router.navigate(['/shoppinglist'])

  //  console.log(account)
  }

}
