import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AccountsService } from './Accounts/accounts.service';
import { AuthService } from './Shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Belly-Filly';
  loggedIn=false
  constructor( private authService:AuthService ,private router:Router){

  }
  ngOnInit(){
    // const LogInObservable = this.authService.checkLogInStatus();
    // LogInObservable.subscribe((loggedIn:boolean) => {
    //         this.loggedIn = loggedIn;
    //         console.log("Here" + loggedIn)
    //     });

    this.authService.loggedIn$.subscribe(
      (loggedIn :boolean) => {
       this.loggedIn =loggedIn
       console.log(this.loggedIn)
  })
}
  // onLogIn(event :boolean){
  //   this.loggedIn=event
  //   console.log("on log In"+ this.loggedIn)

  // }
}
