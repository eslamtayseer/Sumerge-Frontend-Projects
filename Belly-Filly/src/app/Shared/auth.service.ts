// import { EventEmitter, Output } from '@angular/core';
// import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService{

    loggedIn=false
    authenticatedUserName=''

    private logInSource= new Subject<boolean>();
    
    loggedIn$ = this.logInSource.asObservable();

    // @Output()logInEvent = new EventEmitter<boolean>()
    isAuthenticated(){
        const promise =new Promise((resolve,reject)=>{
            // setTimeout(()=>{
            // resolve(this.loggedIn)
            // },500)
            resolve(this.loggedIn)
        })
        return promise
    }

    logIn(name){
        console.log("Log in here")

        console.log("Log in"+name)
        this.authenticatedUserName=name
        this.loggedIn=true
        this.logInSource.next(this.loggedIn);
        // console.log(name)
        // this.logInEvent.emit(this.loggedIn)
    }
    logOut(){
        this.loggedIn=false
    }

    // announceLogIn() {
    //     this.logInSource.next(this.loggedIn);
    //   }

//  public checkLogInStatus(): any {
//      const logInObservable = new Observable(observer => {
//             setTimeout(() => {
//                 observer.next(this.loggedIn);
//             }, 100);
//      });

//      return logInObservable;
//  }
}