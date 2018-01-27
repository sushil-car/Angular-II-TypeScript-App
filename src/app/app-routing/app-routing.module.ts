import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component';
import {SharePriceComponent} from '../share-price/share-price.component';
import {RealEstateHomeComponent} from '../real-estate/real-estate-home/real-estate-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'shareprice',
    component: SharePriceComponent
  }, {
    path: 'realestate/home',
    component: RealEstateHomeComponent
  }, {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}