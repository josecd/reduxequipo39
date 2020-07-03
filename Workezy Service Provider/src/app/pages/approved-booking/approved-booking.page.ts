import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-approved-booking',
  templateUrl: './approved-booking.page.html',
  styleUrls: ['./approved-booking.page.scss']
})
export class ApprovedBookingPage implements OnInit {
  data: any = {
    current: [
      {
        type: 'AC REPAIR',
        image: 'assets/icon-image/jerry.svg',
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
        image: 'assets/icon-image/jasmine.svg',
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
    ]
  };
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  cancelbtn() {
    this.navCtrl.navigateForward('payment');
  }
}
