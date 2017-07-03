import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule, MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LogoutComponent } from '../account/logout.component';
import { UserDetailComponent } from '../user/detail.component';
import { CreateUserComponent } from '../create-user/create-user.component';

import { APP_BASE_HREF } from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';

import { UserInfoComponent } from './user-info.component';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ],
      declarations: [ UserInfoComponent, DashboardComponent, UserDetailComponent, CreateUserComponent, LogoutComponent],
      imports: [ MaterialModule, RouterModule, AppRoutingModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
