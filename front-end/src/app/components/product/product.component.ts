import { Component, OnInit } from '@angular/core';
import { InventoryComponent } from '../inventory/inventory.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    sizes = ['4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'];

    constructor(private dialog: MatDialog) { }

    ngOnInit(): void {
    }

    editProduct() {
        this.dialog.open(InventoryComponent, {
            width: '400px',
            height: '600px'
        })
    }

}
