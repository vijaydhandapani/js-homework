import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule, MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { LogoutComponent } from '../account/logout.component';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserDetailComponent } from '../user/detail.component';
import { CreateUserComponent } from '../create-user/create-user.component';
import { AppRoutingModule } from '../app-routing.module';
import {FormsModule, NgForm} from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, LogoutComponent, UserDetailComponent, CreateUserComponent ],
      imports: [ MaterialModule, RouterModule, AppRoutingModule, FormsModule ],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
