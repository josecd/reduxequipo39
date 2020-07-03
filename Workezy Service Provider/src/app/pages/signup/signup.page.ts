import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  showPassword: any = false;

  constructor(private navCtrl: NavController, private menu: MenuController) {
    this.menu.enable(false);
  }

  ngOnInit() {}

  login() {
    this.navCtrl.back();
  }
  register() {
    this.navCtrl.navigateForward('/set-time');
  }
  gotoHome() {
    this.navCtrl.navigateRoot('/home');
  }
}
