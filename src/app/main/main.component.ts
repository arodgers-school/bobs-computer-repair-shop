//
// References:  https://blog.angular-university.io/angular-2-ngfor/

import { Component, OnInit } from '@angular/core';

export default class Service {
  id: string;
  name: string;
  price: number;
  constructor(id: string, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  serviceList: Array<Service>;
  constructor() {
    this.serviceList = [
      new Service('passwordReset', 'Password Reset', 39.99),
      new Service('spywareRemoval', 'Spyware Removal', 99.99),
      new Service('ramUpgrade', 'RAM Upgrade', 129.99),
      new Service('softwareInstall', 'Software Installation', 49.99),
      new Service('tuneUp', 'Tune-up', 89.99),
      new Service('keyboardCleaning', 'Keyboard Cleaning', 45.0),
      new Service('diskCleanUp', 'Disk Clean-up', 149.99),
    ];
  }

  submit() {}

  selectedServices: string[];

  ngOnInit(): void {}
}
