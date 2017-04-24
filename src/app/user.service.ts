import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { User } from './user';

@Injectable()
export class UserService {

  users: User[] = [];

  private serverResponse = '{ "email": [ "can\'t be blank" ], "first_name": [ "can\'t be blank" ], "last_name": [ "can\'t be blank" ] }'; 
  private userDictionary = { 
    2616823: '{ "id": 2616823, "buyer_id": 2616823, "first_name": "santosh", "last_name": "sahu", "email": "santosh.sahu@thomsonreuters.com" }',
    2616837: '{ "id": 2616837, "buyer_id": 2616837, "first_name": "Arpit", "last_name": "Saxena", "email": "arpit.saxena@thomsonreuters.com" }'
  };

  constructor(private http: Http) { }


  getUsers() {
   this.users = JSON.parse("["+Object.keys(this.userDictionary).map(key => this.userDictionary[key]).join(',')+"]");
  }

  getUser(id: number) {
    return JSON.parse(this.userDictionary[id]);
  }

  private logError(error: any) {
    console.error('service found an error: '+error);
  }

}
