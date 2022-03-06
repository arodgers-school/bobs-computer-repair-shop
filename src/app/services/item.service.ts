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

import { Injectable } from '@angular/core';
import { Service } from '../models/services.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

  getServices(): Service[] {
    const services: Service[] = [
      {
        name: 'Password Reset',
        price: 39.99,
        checked: false,
      },
      {
        name: 'Spyware Removal',
        price: 99.99,
        checked: false,
      },
      {
        name: 'RAM Upgrade',
        price: 129.99,
        checked: false,
      },
      {
        name: 'Software Installation',
        price: 49.99,
        checked: false,
      },
      {
        name: 'Tune-up',
        price: 89.99,
        checked: false,
      },
      {
        name: 'Keyboard Cleaning',
        price: 45.0,
        checked: false,
      },
      {
        name: 'Disk Clean-up',
        price: 149.99,
        checked: false,
      },
    ];
    return services;
  }
}
