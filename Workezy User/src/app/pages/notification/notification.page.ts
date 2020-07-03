import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss']
})
export class NotificationPage implements OnInit {
  data: any = {
    notification: [
      {
        image: 'assets/icon-image/tyler.svg',
        name: 'Tyler Garrett',
        type: 'All Type Ac Repair',
        rate: '4',
        review: '512',
        isAvail: 'instant available',
        price: '6'
      },
      {
        image: 'assets/icon-image/tom.svg',
        name: 'Alan Pierce',
        type: 'All Type AC Repair',
        rate: '4',
        review: '512',
        isAvail: 'give 40% discount',
        price: '6'
      },
      {
        image: 'assets/icon-image/anthony.svg',
        name: 'Adam Ellis',
        type: 'All Type Ac Repair',
        rate: '4',
        review: '512',
        isAvail: 'give 40% discount',
        price: '6'
      },
      {
        image: 'assets/icon-image/adam_hil.svg',
        name: 'Adam Ellis',
        type: 'All Type Home Service',
        rate: '4',
        review: '512',
        isAvail: 'take 1 service and',
        price: '6'
      }
    ]
  };
  constructor() {}

  ngOnInit() {}
}
