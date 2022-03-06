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

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
