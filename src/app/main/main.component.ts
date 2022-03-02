import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}

  typesOfServices: string[] = [
    'Password Reset ($39.99)',
    'Spyware Removal ($99.99)',
    'RAM Upgrade ($129.99)',
    'Software Installation ($49.99)',
    'Tune-up ($89.99)',
    'Keyboard Cleaning ($45.00)',
    'Disk Clean-up ($149.99)',
  ];

  ngOnInit(): void {}
}
