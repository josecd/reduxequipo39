import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  editbtn: any = 0;
  data = {
    name: 'Aaron Grand',
    email: 'aarongrand@gmail.com',
    phone: '+44 9033976754',
    address: 'Rain Charm House Park, London',
    available: '10:00AM To 08:00PM',
    service: 'Beauty & Spa',
    price: '$06/Hour'
  };
  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  editData() {
    this.editbtn = 1;
  }
  saveProfile() {
    this.editbtn = 0;
  }
  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Select Service',
      inputs: [
        {
          name: 'Kirakwall',
          type: 'radio',
          label: 'Beauty & Spa',
          value: 'Beauty & Spa',
          checked: true
        },
        {
          name: 'Kirakwall2',
          type: 'radio',
          label: 'Health Care',
          value: 'Health Care'
        },
        {
          name: 'Kirakwall3',
          type: 'radio',
          label: 'Pest Control',
          value: 'Pest Control'
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
            this.data.service = data;
          }
        }
      ]
    });

    await alert.present();
  }
}
