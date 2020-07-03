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
        image: 'assets/icon-image/beaut_img.svg',
        name: 'Beauty & Spa',
        label: 'Trending'
      },
      {
        image: 'assets/icon-image/repair_icon.svg',
        name: 'Appliance Repair'
      },
      {
        image: 'assets/icon-image/travel.svg',
        name: 'Travel '
      },
      {
        image: 'assets/icon-image/repair_icon.svg',
        name: 'Wedding & Event'
      },
      {
        image: 'assets/icon-image/Cockroach.svg',
        name: 'Pest Control'
      },
      {
        image: 'assets/icon-image/cityscape.svg',
        name: 'Real Estate',
        label: 'Trending'
      },
      {
        image: 'assets/icon-image/service-img.svg',
        name: 'Business Services'
      },
      {
        image: 'assets/icon-image/hobbies.svg',
        name: 'Hobbies',
        label: 'Trending'
      },
      {
        image: 'assets/icon-image/health.svg',
        name: 'Health Care'
      },
      {
        image: 'assets/icon-image/job-icon.svg',
        name: 'Job'
      },
      {
        image: 'assets/icon-image/rent-car.svg',
        name: 'Rent & Hire'
      },
      {
        image: 'assets/icon-image/more-icon.svg',
        name: 'More'
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
