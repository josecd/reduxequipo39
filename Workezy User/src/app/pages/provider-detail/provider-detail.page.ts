import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.page.html',
  styleUrls: ['./provider-detail.page.scss']
})
export class ProviderDetailPage implements OnInit {
  state: any = 1;
  isjobpost: any;
  data: any = {
    photos: [
      'assets/icon-image/ac-service.svg',
      'assets/icon-image/ac-repair.svg',
      'assets/icon-image/ac-work.svg',
      'assets/icon-image/ac-img.svg'
    ],
    review: [
      {
        name: 'Carol Hudson',
        image: 'assets/icon-image/alex.svg',
        ago: '1 Hour ago',
        detail:
          'Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar felis at metus',
        rate: '4',
        status: 'aa'
      },
      {
        name: 'Harry Wagner',
        image: 'assets/icon-image/alex.svg',
        ago: '2 Hour ago',
        detail:
          'Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar felis at metus',
        rate: '4'
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

  logScrolling(ev) {
    if (ev.detail.scrollTop >= 200) {
      this.state = 2;
    } else {
      this.state = 1;
    }
  }
  changeRange(e) {}

  servie_detail() {
    this.navCtrl.navigateForward('service-detail');
  }
  booking() {
    this.navCtrl.navigateForward('tabs/booking');
  }
}
