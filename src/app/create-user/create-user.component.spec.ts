import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule, MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LogoutComponent } from '../account/logout.component';
import { UserDetailComponent } from '../user/detail.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { APP_BASE_HREF } from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';

import { CreateUserComponent } from './create-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoComponent, DashboardComponent, UserDetailComponent, CreateUserComponent, LogoutComponent],
      imports: [ MaterialModule, RouterModule, AppRoutingModule, FormsModule, BrowserAnimationsModule ],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});