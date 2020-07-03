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
        image: '../../../assets/icon-image/repair_icon.svg',
        type: 'Ac not working properly',
        msg: 'send offer reject',
        name: 'Ronald Evans'
      },
      {
        image: '../../../assets/icon-image/brretice.svg',
        type: 'Ac Service',
        msg: 'after 30min job start',
        name: 'Beatrice Guerrero'
      },
      {
        image: '../../../assets/icon-image/praticia.svg',
        type: 'Please check my AC',
        msg: 'approved offer',
        name: 'Patricia Hayes'
      },
      {
        image: '../../../assets/icon-image/lawson.svg',
        type: 'work done',
        msg: 'payment received',
        name: 'Bianca Lawson'
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
