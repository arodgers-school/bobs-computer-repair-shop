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

import { InvoiceDialogComponent } from './invoice-dialog.component';

describe('InvoiceDialogComponent', () => {
  let component: InvoiceDialogComponent;
  let fixture: ComponentFixture<InvoiceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoiceDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
