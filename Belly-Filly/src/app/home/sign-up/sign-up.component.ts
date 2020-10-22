import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/Accounts/accounts.service';
import { AuthService } from 'src/app/Shared/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name=''
  email=''
  password=''
  phone=''
  address=''
  constructor(private accountService :AccountsService, private authService:AuthService ,private router:Router) { }

  ngOnInit(): void {
  }

  onSignUp(){
    let result =this.accountService.addAccount({name:this.name,email:this.email,password:this.password,phone:this.phone,address:this.address})

    if(this.name.length===0 || this.password.length===0|| this.email.length===0)
    {
      alert('Please Enter Required Information: Email, Name and Password')
      return

    }

    // if(!this.email.match("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")){
    //   alert('Please Enter a Valid Email')
    // }
    if(!this.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      alert('Please Enter a Valid Email')
      return
    }
    if(result ==false) {
      alert('Account Already Exists')
      return
    }
   
    this.authService.logIn(this.name)
    this.router.navigate(['/shoppinglist'])
 
   //  console.log(account)
   }
 

}
