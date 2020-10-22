import {Account} from './account.model'
export class AccountsService{
    private accounts :Account[]=[
        {name:"Eslam Tayseer",email:'etayseer@sumerge.com', password:"123456"},
        {name:"Omar Tayseer",email:'omartayseer@yahoo.com', password:"123456"},
        {name:"Amgad Diab",email:'amgaddiab@hotmail.com', password:"123456"}

    ]

    getAccounts(){
        return this.accounts.slice()
    }

    addAccount(account:Account){
        if(this.checkAccount(account.email,account.password).length===0){
        this.accounts.push(account)
        return true;
        }
        else return false;
    }
    checkAccount(email:string,password:string){
        return this.accounts.filter(account => (account.email.toLowerCase() === email.toLowerCase()));
    }
}