import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-select-price',
  templateUrl: './select-price.page.html',
  styleUrls: ['./select-price.page.scss']
})
export class SelectPricePage implements OnInit {
  price: number = 6.2;
  constructor(private navCtrl: NavController, private menu: MenuController) {
    this.menu.enable(false);
  }

  ngOnInit() {}

  gotoHome() {
    this.navCtrl.navigateRoot('/home');
  }

  upValue() {
    this.price = this.price + 1;
  }

  downValue() {
    if (this.price >= 1) {
      this.price = Math.round(this.price - 1);
    }
  }
}
