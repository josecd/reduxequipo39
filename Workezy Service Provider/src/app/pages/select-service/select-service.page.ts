import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.page.html',
  styleUrls: ['./select-service.page.scss']
})
export class SelectServicePage implements OnInit {
  isactive: any;
  activity = [];

  data: any = {
    services: [
      {
        image: 'assets/icon-image/beaut_img.svg',
        name: 'Beauty & Spa',
        active: false
      },
      {
        image: 'assets/icon-image/repair_icon.svg',
        name: 'Appliance Repair',
        active: false
      },
      {
        image: 'assets/icon-image/travel.svg',
        name: 'Travel',
        active: false
      },
      {
        image: 'assets/icon-image/repair_icon.svg',
        name: 'Wedding & Event',
        active: false
      },
      {
        image: 'assets/icon-image/Cockroach.svg',
        name: 'Pest Control',
        active: false
      },
      {
        image: 'assets/icon-image/cityscape.svg',
        name: 'Real Estate',
        label: 'Trending',
        active: false
      },
      {
        image: 'assets/icon-image/service-img.svg',
        name: 'Business Services',
        active: false
      },
      {
        image: 'assets/icon-image/hobbies.svg',
        name: 'Hobbies',
        active: false
      },
      {
        image: 'assets/icon-image/health.svg',
        name: 'Health Care',
        active: false
      },
      {
        image: 'assets/icon-image/job-icon.svg',
        name: 'Job',
        active: false
      },
      {
        image: 'assets/icon-image/rent-car.svg',
        name: 'Rent & Hire',
        active: false
      },
      {
        image: 'assets/icon-image/more-icon.svg',
        name: 'More',
        active: false
      }
    ]
  };
  constructor(private navCtrl: NavController, private menu: MenuController) {
    this.menu.enable(false);
  }

  ngOnInit() {}

  service(item) {
    if (this.activity.length > 0) {
      let isequal: any = false;
      let indval: any;

      this.activity.forEach((element, index) => {
        if (element == item.name) {
          isequal = true;
          indval = index;
        }
      });
      if (isequal == false) {
        this.activity.push(item.name);
        item.active = true;
      } else {
        this.activity.splice(indval, 1);
        item.active = false;
      }
    } else {
      this.activity.push(item.name);
      item.active = true;
    }
  }
  price() {
    this.navCtrl.navigateForward('/select-price');
  }
}
