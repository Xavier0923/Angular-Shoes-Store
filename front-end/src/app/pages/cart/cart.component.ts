import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    data = [
        {picture: './../../assets/images/1.jpg', name: 'aaaaaaaaaaaaaaaaaa', size: '5', unitPrice: 1000, mount: 5, sumPrice: 5000},
        {picture: './../../assets/images/2.jpg', name: 'bbbbbbbbbbbbbbbbbb', size: '8', unitPrice: 2000, mount: 5, sumPrice: 10000},
        {picture: './../../assets/images/3.jpg', name: 'cccccccccccccccccc', size: '9', unitPrice: 3000, mount: 5, sumPrice: 15000},
    ]
    displayedColumns!: string[];
    dataSource: any;

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = ['picture', 'name', 'size', 'unitPrice', 'mount', 'sumPrice', 'action'];
    this.dataSource = this.data;
  }

}
