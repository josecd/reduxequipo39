import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-set-time',
  templateUrl: './set-time.page.html',
  styleUrls: ['./set-time.page.scss']
})
export class SetTimePage implements OnInit {
  data: any = {
    start_time: '1990-02-19T04:30Z',
    start_a: 'AM',
    end_time: '1990-02-19T20:00:00+05:30',
    end_a: 'PM'
  };

  constructor(private navCtrl: NavController, private menu: MenuController) {
    this.menu.enable(false);
  }

  ngOnInit() {}

  service() {
    this.navCtrl.navigateForward('/select-service');
  }

  dateChanged(data) {}
}
