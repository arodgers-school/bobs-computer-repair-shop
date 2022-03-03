//
// References:  https://blog.angular-university.io/angular-2-ngfor/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}

  submit() {
    console.log(this.selectedServices);
  }

  typesOfServices: {
    id: string;
    name: string;
    price: number;
  }[] = [
    {
      id: 'passwordReset',
      name: 'Password Reset',
      price: 39.99,
    },
    {
      id: 'spywareRemoval',
      name: 'Spyware Removal',
      price: 99.99,
    },
    {
      id: 'ramUpgrade',
      name: 'RAM Upgrade',
      price: 129.99,
    },
    {
      id: 'softwareInstall',
      name: 'Software Installation',
      price: 49.99,
    },
    {
      id: 'tuneUp',
      name: 'Tune-up',
      price: 89.99,
    },
    {
      id: 'keyboardCleaning',
      name: 'Keyboard Cleaning',
      price: 45.0,
    },
    {
      id: 'diskCleanUp',
      name: 'Disk Clean-up',
      price: 149.99,
    },
  ];

  selectedServices: string[];

  ngOnInit(): void {}
}
