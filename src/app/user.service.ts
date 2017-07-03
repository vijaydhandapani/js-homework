import { Injectable } from '@angular/core';

import { User } from './user';
//import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  users: User[] = [];
  formErrors;

  private serverResponse = '{ "email": [ "can\'t be blank" ], "first_name": [ "can\'t be blank" ], "last_name": [ "can\'t be blank" ] }'; 
  private userDictionary = { 
    1: '{ "id": 1, "buyer_id": 1, "first_name": "Fred", "last_name": "Flintstone", "email": "fred.flintstone@slaterockandgravel.com" }',
    2: '{ "id": 2, "buyer_id": 2, "first_name": "Barney", "last_name": "Rubble", "email": "barney.rubble@slaterockandgravel.com" }',
    3: '{ "id": 3, "buyer_id": 3, "first_name": "Wilma", "last_name": "Flintstone", "email": "wilma.flinstone@dailygranite.com" }'
  };

  constructor() { }
//public newUserSubject = new Subject<any>();

  getUsers():Array<any> {
   this.users = JSON.parse("["+Object.keys(this.userDictionary).map(key => this.userDictionary[key]).join(',')+"]");
   return this.users;
  }

  getUser(id: number) {
    return JSON.parse(this.userDictionary[id]);
  }

getServerResponse(){
  if(!this.formErrors){
      this.formErrors = JSON.parse(this.serverResponse);
  }
  return this.formErrors;
}

addNewUser(formValue){
   
     formValue['id']=4;
     formValue['buyer_id'] = 4;
     console.log(formValue)
     //this.newUserSubject.next(formValue);
  
}
  private logError(error: any) {
    console.error('service found an error: '+error);
  }

}
