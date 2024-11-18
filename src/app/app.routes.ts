import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DusComponent } from './pages/dus/dus.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProductsComponent } from './pages/products/products.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
  {
    path:"" , component : HomePageComponent
  },
  // {
  //   path:"dus" , component : DusComponent
  // },
  {
    path:"dus" , component : LoginPageComponent
  },
  {
    path:"portfolio" , component : PortfolioComponent
  },
  {
    path:"product" , component : ProductsComponent
  },
  {
    path:"products/:id" , component : SinglepageComponent
  },
  {
    path:"login" , component : LoginPageComponent
  }

]
