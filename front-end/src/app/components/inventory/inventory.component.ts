import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

    productStatus = ['out of stock', 'In stock', 'stop selling']

  constructor() {}

  ngOnInit(): void {
        }

}
