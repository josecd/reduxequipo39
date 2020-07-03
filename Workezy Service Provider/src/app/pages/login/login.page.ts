import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  showPassword: any = false;

  constructor(private navCtrl: NavController, private menu: MenuController) {
    this.menu.enable(false);
  }

  ngOnInit() {}

  signup() {
    this.navCtrl.navigateForward('/signup');
  }

  sign_in() {
    this.navCtrl.navigateRoot('/home');
  }

  forgotPassword() {
    this.navCtrl.navigateForward('/forgot');
  }
}
