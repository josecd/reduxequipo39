import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss']
})
export class SlidePage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  home() {
    this.navCtrl.navigateRoot('/home');
  }
}
