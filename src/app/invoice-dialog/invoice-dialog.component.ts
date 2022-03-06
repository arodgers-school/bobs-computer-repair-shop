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

import { Component, Inject, OnInit } from '@angular/core';
import { Invoice } from '../services/invoice';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.scss'],
})
export class InvoiceDialogComponent implements OnInit {
  invoice: Invoice;

  constructor(
    private dialogRef: MatDialogRef<InvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.invoice = data.invoice;
  }

  ngOnInit(): void {}
}
