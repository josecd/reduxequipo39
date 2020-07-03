import { Component } from '@angular/core';
import { AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  selectedLocation = 'Goldport';
  data: any = {
    ongoing: [
      {
        image: 'assets/icon-image/ac-jermeny.svg',
        name: 'jeremy Mendoza',
        type: 'Ac Repair',
        time: '6/hour'
      },
      {
        image: 'assets/icon-image/tom-ac.svg',
        name: 'Tom Matthews',
        type: 'Ac Service',
        time: '5/hour'
      },
      {
        image: 'assets/icon-image/fuller-ac.svg',
        name: 'Francine Fuller',
        type: 'Ac Repair',
        time: '6/hour'
      }
    ],
    available: [
      {
        image: 'assets/icon-image/bobby.svg',
        name: 'Bobby Holland',
        type: 'AC not working Properly',
        date: '15/10/2019',
        time: '10:15 AM',
        address: 'The Townhouse, Saxon Way, London'
      },
      {
        image: 'assets/icon-image/barabara.svg',
        name: 'Barbara Bradley',
        type: 'AC not working Properly',
        date: '15/10/2019',
        time: '12:00 AM',
        address: 'The Townhouse, Saxon Way, London'
      }
    ],
    send: [
      {
        image: 'assets/icon-image/sullivan.svg',
        name: 'Dorothy Sullivan',
        type: 'Ac not working Properly',
        date: '15/10/2019',
        time: '10:15 AM',
        address: 'The Townhouse, Saxon Way, London'
      },
      {
        image: 'assets/icon-image/victoria.svg',
        name: 'Victoria Pearson',
        type: 'Ac not working Properly',
        date: '15/10/2019',
        time: '12:00 AM',
        address: 'The Townhouse, Saxon Way, London'
      }
    ]
  };
  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private menu: MenuController
  ) {
    this.menu.enable(true);
  }
  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Set location',
      inputs: [
        {
          name: 'Kirakwall',
          type: 'radio',
          label: 'Kirakwall',
          value: 'Kirakwall',
          checked: true
        },
        {
          name: 'Kirakwall2',
          type: 'radio',
          label: 'Kirakwall2',
          value: 'Kirakwall2'
        },
        {
          name: 'Kirakwall3',
          type: 'radio',
          label: 'Kirakwall3',
          value: 'Kirakwall3'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        },
        {
          text: 'Ok',
          handler: data => {
            this.selectedLocation = data;
          }
        }
      ]
    });

    await alert.present();
  }
  service() {
    this.navCtrl.navigateForward('/request-list');
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }
}
