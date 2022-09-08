import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppComponent } from './app.component';
//@ts-ignore
import awsconfig from '../aws-exports';
//@ts-ignore
import Amplify from 'aws-amplify';
Amplify.configure(awsconfig);

import { HotelsComponent } from './hotels/hotels.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { LoginComponent } from './login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'hotels', component: HotelsComponent },
  { path: 'add-hotel', component: AddHotelComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    AddHotelComponent,
    LoginComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AmplifyAuthenticatorModule,
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
