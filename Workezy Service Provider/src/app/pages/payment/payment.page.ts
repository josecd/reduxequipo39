import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss']
})
export class PaymentPage implements OnInit {
  data: any = {
    type: 'AC REPAIR',
    image: 'assets/icon-image/jerry.svg',
    name: 'Jerry Pierce',
    date: '14/10/2019',
    detail:
      'AC Repair with full service Ac reader will be distracted by the readable content of a page when looking at its layout',
    rdate: '15/10/2019',
    Stime: '10:15 PM',
    Etime: '12:15',
    id: '25687',
    payment: 'Online',
    fare: '$6/hour',
    pay: '12',
    totalTime: '2',
    status: 'Payment'
  };

  constructor() {}

  ngOnInit() {}
}
