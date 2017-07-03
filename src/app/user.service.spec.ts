import { TestBed, inject } from '@angular/core/testing';

import { UserService} from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ],
      providers: [UserService]
    });
  });

  it('should create the service object', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

   it('should return the user object for the given id ', inject([UserService], (service: UserService) => {
    let user = service.getUser(1);
    expect(user).toBeTruthy();
    expect(user.email).toEqual('fred.flintstone@slaterockandgravel.com')
  }));
  it('should return 3 users', inject([UserService], (service: UserService) => {
    let users:Array<any> = service.getUsers();
    expect(users.length).toEqual(3)
  }));

 /* it('should ...', inject([UserService], (service: UserService) => {
    let user = service.createUser("vijay" ,"raj", "v@gmail.com");
    expect(user.id).toEqual(4);
    expect(user.firstName).toEqual('vijay');
    
  }));*/
});
