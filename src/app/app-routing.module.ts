/*
Title: 
    Assignment 9.3
Author: 
    Adam Rodgers
Date: 
    3/2/2022
Modified By: Adam Rodgers
Description: Bob's Computer Repair Shop
Resources:
    Bellevue University WEB425 Github Repo
    https://material.angular.io/components/categories
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
  },
  {
    path: 'services',
    component: BaseLayoutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
