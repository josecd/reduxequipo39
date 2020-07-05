import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.page.html',
  styleUrls: ['./service-list.page.scss']
})
export class ServiceListPage implements OnInit {
  data: any = {
    best: [
      {
        image: 'assets/icon-image/agua.svg',
        name: 'Botellas',
        count: '10'
      },
      {
        image: 'assets/icon-image/bebida.svg',
        name: 'Vasos',
        count: '5'
      },
      {
        image: 'assets/icon-image/platos.svg',
        name: 'Platos',
        count: '5'
      },
      {
        image: 'assets/icon-image/bolso.svg',
        name: 'Bolsas',
        count: '15'
      },
      {
        image: 'assets/icon-image/carcasa-de-telefono.svg',
        name: 'Fundas',
        count: '1'
      },
    ],
  };

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  provider() {
    if (localStorage.getItem('isjobpost') == 'true') {
      this.navCtrl.navigateForward(['service-detail']);
    } else {
      this.navCtrl.navigateForward(['tabs/provide-list']);
    }
  }
}
