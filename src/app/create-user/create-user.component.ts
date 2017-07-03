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
    
     this.errorMsg.email='';this.errorMsg.firstName='';this.errorMsg.lastName='';
     this.userDetails = f.value;
     if(f.valid){
       console.log("Create User");
       this.createUser(this.userDetails)
    }else{
      
        this.serverError = this.userService.getServerResponse();
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
                // lastname is empt
                this.errorMsg.lastName = this.serverError[key][0];            
            }
      });

        // for( var a  in this.userDetails ){
        //     if (this.userDetails.hasOwnProperty(a)) {
                
        //     }
        // }
        console.log(this.serverError);
        console.log(this.errorMsg);
    }
   }

  createUser(userDetails){
    this.userService.addNewUser(userDetails);
    this._route.navigate([''])
    //  this.userService.addNewUser(userDetails);
  }
}