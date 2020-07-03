import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.page.html',
  styleUrls: ['./request-list.page.scss']
})
export class RequestListPage implements OnInit {
  activeTab: any = 'Active';
  data: any = {
    pending: [
      {
        image: 'assets/icon-image/victoria.svg',
        name: 'Marilyn Valdez',
        type: 'AC not working Properly',
        date: '15/10/2019',
        time: '10:15 AM',
        address: 'The Townhouse, Saxon Way, London'
      },
      {
        image: 'assets/icon-image/philip.svg',
        name: 'Philip McDonald',
        type: 'AC not working Properly',
        date: '15/10/2019',
        time: '12:00 AM',
        address: 'The Townhouse, Saxon Way, London'
      },
      {
        image: 'assets/icon-image/randy.svg',
        name: 'Randy Gray',
        type: 'AC not working Properly',
        date: '15/10/2019',
        time: '12:00 AM',
        address: 'The Townhouse, Saxon Way, London'
      },
      {
        image: 'assets/icon-image/watkins.svg',
        name: 'Elizabeth Watkins',
        type: 'AC not working Properly',
        date: '15/10/2019',
        time: '12:00 AM',
        address: 'The Townhouse, Saxon Way, London'
      }
    ],
    approved: [
      {
        image: 'assets/icon-image/tyler.svg',
        name: 'Tyler Cunningham',
        type: 'AC not working Properly',
        date: '15/10/2019',
        time: '10:15 AM',
        address: 'The Townhouse, Saxon Way, London'
      },
      {
        image: 'assets/icon-image/james.svg',
        name: 'Natasha James',
        type: 'AC not working Properly',
        date: '15/10/2019',
        time: '12:00 AM',
        address: 'The Townhouse, Saxon Way, London'
      },
      {
        image: 'assets/icon-image/baker.svg',
        name: 'Andreea Baker',
        type: 'AC not working Properly',
        date: '15/10/2019',
        time: '12:00 AM',
        address: 'The Townhouse, Saxon Way, London'
      }
    ],
    reject: [
      {
        image: 'assets/icon-image/bobby.svg',
        name: 'Nancy Elliot',
        type: 'Ac not working Properly',
        date: '15/10/2019',
        time: '10:15 AM',
        address: 'The Townhouse, Saxon Way, London'
      },
      {
        image: 'assets/icon-image/philip.svg',
        name: 'Bianca Jones',
        type: 'Ac not working Properly',
        date: '15/10/2019',
        time: '12:00 AM',
        address: 'The Townhouse, Saxon Way, London'
      },
      {
        image: 'assets/icon-image/randy.svg',
        name: 'Randy Jordan',
        type: 'Ac not working Properly',
        date: '15/10/2019',
        time: '12:00 AM',
        address: 'The Townhouse, Saxon Way, London'
      },
      {
        image: 'assets/icon-image/sullivan.svg',
        name: 'Julie Gilbert',
        type: 'Ac not working Properly',
        date: '15/10/2019',
        time: '12:00 AM',
        address: 'The Townhouse, Saxon Way, London'
      }
    ]
  };
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  chageTab(name) {
    this.activeTab = name;
  }

  aproved() {
    this.navCtrl.navigateForward('/approved-booking');
  }
}
