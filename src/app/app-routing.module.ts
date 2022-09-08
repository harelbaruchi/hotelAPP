import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'hotels',
    component: HotelsComponent,
  },
  { path: 'add-hotel', component: AddHotelComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
