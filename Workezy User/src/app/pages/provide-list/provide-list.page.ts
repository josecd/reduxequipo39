import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-provide-list',
  templateUrl: './provide-list.page.html',
  styleUrls: ['./provide-list.page.scss']
})
export class ProvideListPage implements OnInit {
  activeTab: any = 'Active';
  isjobpost: any;
  data: any = {
    provider: [
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
        name: 'Tom Wade',
        type: 'Daikin Ac Repair',
        rate: '4',
        review: '508',
        isAvail: 'instant available',
        price: '7'
      },
      {
        image: 'assets/icon-image/anthony.svg',
        name: 'Anthony Willis',
        type: 'Hitachi AC Specialist',
        rate: '4',
        review: '502',
        isAvail: 'instant available',
        price: '7'
      },
      {
        image: 'assets/icon-image/jacob.svg',
        name: 'Jacob Schneider',
        type: 'All Type Ac Repair',
        rate: '4',
        review: '510',
        isAvail: 'instant available',
        price: '7'
      },
      {
        image: 'assets/icon-image/jordon.svg',
        name: 'Richard Jordan',
        type: 'Panasonic AC Repair',
        rate: '4',
        review: '512',
        isAvail: 'instant available',
        price: '8'
      },
      {
        image: 'assets/icon-image/alex.svg',
        name: 'Alex Wood',
        type: 'Daikin AC Repair',
        rate: '4',
        review: '512',
        isAvail: 'instant available',
        price: '8'
      }
    ]
  };
  constructor(private navCtrl: NavController) {
    if (localStorage.getItem('isjobpost') == 'true') {
      this.isjobpost = true;
    } else {
      this.isjobpost = false;
    }
  }

  ngOnInit() {}

  provide_detail() {
    this.navCtrl.navigateForward(['provider-detail']);
  }

  changeTab(name) {
    this.activeTab = name;
  }
}
