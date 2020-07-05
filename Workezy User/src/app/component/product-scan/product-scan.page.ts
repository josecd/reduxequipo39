import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-scan',
  templateUrl: './product-scan.page.html',
  styleUrls: ['./product-scan.page.scss'],
})
export class ProductScanPage implements OnInit {
  id
  data: any = {
    best: [
      {
        image: 'assets/icon-image/freez.svg',
        name: 'Refrigerator'
      },
      {
        image: 'assets/icon-image/washing-machine.svg',
        name: 'Washing Machine'
      },
      {
        image: 'assets/icon-image/water-filter.svg',
        name: 'Water Purifier'
      }
    ],
    explore: [
      {
        image: 'assets/icon-image/air-conditioner.svg',
        name: 'AC'
      },
      {
        image: 'assets/icon-image/cooler.svg',
        name: 'Air Cooler'
      },
      {
        image: 'assets/icon-image/Camera.svg',
        name: 'Camera'
      },
      {
        image: 'assets/icon-image/car_icon.svg',
        name: 'Car'
      },
      {
        image: 'assets/icon-image/car_ac.svg',
        name: 'Car AC'
      },
      {
        image: 'assets/icon-image/computer.svg',
        name: 'Computer'
      },
      {
        image: 'assets/icon-image/printer.svg',
        name: 'Computer Printer'
      }
    ]
  }; 
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  }

}
