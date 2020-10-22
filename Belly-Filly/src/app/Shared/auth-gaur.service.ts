import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
// import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGaurdService implements CanActivate ,CanActivateChild {
    constructor(private authService:AuthService ,private router:Router){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
     return   this.authService.isAuthenticated().then(
            (authencated:boolean)=>{
                if(authencated){ 
                    if(route.data['source']==="not-found") {
                        this.router.navigate(['/shoppinglist'])
                        alert("Page not found")
                        return false;
                   
                    }
                    else if(route.data['source']==="home-page"){
                        this.router.navigate(['/shoppinglist'])
                    }
                    
                    return true;
                }
                else if(route.data['source']==="home-page"){
                   return true
                }
                else if(route.data['source']==="protected-page"){
                    // return true

                    alert("You need to Log In First")
                    this.router.navigate(['/'])
                    // console.log("here")
                    // return false;
                }
                else {
                    alert("Page not found")
                    this.router.navigate(['/'])
                }
            }
        )
    }
    canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
        return this.canActivate(route,state)
    }
}