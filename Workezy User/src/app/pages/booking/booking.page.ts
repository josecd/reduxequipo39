import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss']
})
export class BookingPage implements OnInit {
  activeTab: string = 'Active';
  data: any = {
    current: [
      {
        type: 'AC REPAIR',
        image: 'assets/icon-image/tyler.svg',
        name: 'Tyler Garrett',
        date: '14/10/2019',
        detail:
          'It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        rdate: '15/10/2019',
        time: '10:15 PM',
        id: '25687',
        payment: 'Online',
        status: 'Post Request'
      },
      {
        type: 'CAR REPAIR',
        image: 'assets/icon-image/chris.svg',
        name: 'Chris Barrett',
        date: '14/10/2019',
        detail:
          'It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        rdate: '15/10/2019',
        time: '10:15 PM',
        id: '25687',
        payment: 'Online',
        status: 'Post Request'
      }
    ],
    cancel: {
      type: 'AC REPAIR',
      image: 'assets/icon-image/tyler.svg',
      name: 'Tyler Garrett',
      date: '14/10/2019',
      detail:
        'It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
      rdate: '15/10/2019',
      time: '10:15 PM',
      id: '25687',
      payment: 'Online',
      status: 'Post Request'
    },
    finished: [
      {
        type: 'AC REPAIR',
        image: 'assets/icon-image/randy.svg',
        name: 'Randy Mendoza',
        date: '14/10/2019',
        detail:
          'It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        rdate: '15/10/2019',
        time: '10:15 PM',
        id: '25687',
        payment: 'Online',
        status: 'workdone'
      },
      {
        type: 'CAR REPAIR',
        image: 'assets/icon-image/hawkins.svg',
        name: 'Anthony Hawkins',
        date: '14/10/2019',
        detail:
          'It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        rdate: '15/10/2019',
        time: '10:15 PM',
        id: '25687',
        payment: 'Online',
        status: 'Post Request'
      }
    ]
  };
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  chageTab(name) {
    this.activeTab = name;
  }

  cancelbtn() {
    this.activeTab = 'Cancel';
  }

  paymentbtn() {
    this.navCtrl.navigateForward(['payment']);
  }
}
