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
    services: [
      {
        image: 'assets/icon-image/bolsa-de-plastico.svg',
        name: 'Plástico',
      },
      {
        image: 'assets/icon-image/toalla.svg',
        name: 'Tela'
      },
      {
        image: 'assets/icon-image/caja.svg',
        name: 'Cartón '
      },
      {
        image: 'assets/icon-image/engranaje.svg',
        name: 'Metal'
      },
      {
        image: 'assets/icon-image/madera.svg',
        name: 'Madera'
      },
      {
        image: 'assets/icon-image/copa-de-vino.svg',
        name: 'Vidrio'
      },
    ]
  };

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private menu: MenuController
  ) {
    this.menu.enable(true);
  }

  detail() {
    this.navCtrl.navigateForward('tabs/service-list');
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
}
