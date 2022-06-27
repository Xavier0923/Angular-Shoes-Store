import { Component, OnInit } from '@angular/core';
import { UserInfoComponent } from '../user-info/user-info.component';
import { InventoryComponent } from '../inventory/inventory.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    isLogin: boolean = true;

    constructor(private dialog: MatDialog) { }

    ngOnInit(): void {
    }

    openUserInfo() {
        this.dialog.open(UserInfoComponent, {
            width: '400px',
            height: '450px'
        })
    }

    openAddProduct() {
        this.dialog.open(InventoryComponent, {
            width: '400px',
            height: '600px'
        })
    }

}
