import { TestBed, async } from '@angular/core/testing';
import { MaterialModule, MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoutComponent } from './account/logout.component';
import { UserDetailComponent } from './user/detail.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { APP_BASE_HREF } from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ],
      declarations: [
        AppComponent, DashboardComponent, UserInfoComponent, LogoutComponent, UserDetailComponent,CreateUserComponent
      ],
      imports: [ MaterialModule, AppRoutingModule, FormsModule, BrowserAnimationsModule ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Vulcan');
  }));
});
