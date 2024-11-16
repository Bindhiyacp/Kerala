import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DusComponent } from './pages/dus/dus.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  {
    path:"" , component : HomePageComponent
  },
  {
    path:"dus" , component : DusComponent
  },
  {
    path:"portfolio" , component : PortfolioComponent
  },
  {
    path:"product" , component : ProductsComponent
  }

]
