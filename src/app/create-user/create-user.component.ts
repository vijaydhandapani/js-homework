import { Component} from '@angular/core';
import { UserService } from '../user.service';
import {FormsModule, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ErrorMsg} from './error-msg';



@Component({
  selector: 'creat-user',
  templateUrl: './create-user.html',
  providers: [ UserService ]
 // styleUrls: './create.user.css'
  
})
export class CreateUserComponent  {

  userDetails:Object;
  serverError:Object;
  errorMsg = new ErrorMsg()
   
  
  constructor(private userService: UserService, private _route: Router) { }

   onUserSubmit(f: NgForm){
    //Reset the errorMsg Property
     this.errorMsg.email='';this.errorMsg.firstName='';this.errorMsg.lastName='';
     
     //assign form value to userDetails varibale
     this.userDetails = f.value;
     
     //if form is not empty create user and pass.post the value to the user.service
     if(f.valid){
       console.log("Create User");
       this.createUser(this.userDetails)
    }else{
      //form is not valid, call the serverError 
        this.serverError = this.userService.getServerResponse();

        //Set the serverError to the errorMsg email,fname & lname Property
        Object.keys(this.userDetails).forEach(key => {
            if(key ==='email'){
              // check email validation 
              var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
              if(!EMAIL_REGEXP.test(this.userDetails[key])){
                this.errorMsg.email = this.serverError[key][0];         
              }
            }else if(key ==='first_name' && this.userDetails[key]===""){
              // first name is empty
              this.errorMsg.firstName = this.serverError[key][0];
            }else{
                // lastname is empty
                this.errorMsg.lastName = this.serverError[key][0];            
            }
      });

    }
   }
   
//post the new user details to the server
  createUser(userDetails){
    this.userService.addNewUser(userDetails);
    this._route.navigate([''])
    
  }
}
