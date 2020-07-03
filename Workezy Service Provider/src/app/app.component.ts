import { Component, ViewChildren, QueryList } from '@angular/core';

import {
  Platform,
  NavController,
  ToastController,
  IonRouterOutlet
} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { menuController } from '@ionic/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'assets/icon-image/home-menu.svg'
    },
    {
      title: 'Service',
      url: '/request-list',
      icon: 'assets/icon-image/service-menu.svg'
    },
    {
      title: 'Booking',
      url: '/approved-booking',
      icon: 'assets/icon-image/booking-menu.svg'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'assets/icon-image/profile-menu.svg'
    },
    {
      title: 'Notification',
      url: '/notification',
      icon: 'assets/icon-image/notification-menu.svg'
    },
    {
      title: 'Set Time',
      url: '/set-time',
      icon: 'assets/icon-image/profile-menu.svg'
    },
    {
      title: 'Set Service',
      url: '/select-service',
      icon: 'assets/icon-image/profile-menu.svg'
    },
    {
      title: 'Set Price',
      url: '/select-price',
      icon: 'assets/icon-image/profile-menu.svg'
    },
    {
      title: 'Payment Status',
      url: '/payment',
      icon: 'assets/icon-image/booking-menu.svg'
    }
  ];
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private router: Router,
    private toastController: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      setTimeout(() => {
        this.splashScreen.hide();
        this.navCtrl.navigateRoot('/login');
      }, 1000);
    });
    this.backButtonEvent();
  }
  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (
          this.router.url === '/home' ||
          this.router.url === '/request-list' ||
          this.router.url === '/approved-booking' ||
          this.router.url === '/payment' ||
          this.router.url === '/profile' ||
          this.router.url === '/notification' ||
          this.router.url === '/set-time' ||
          this.router.url === '/select-service' ||
          this.router.url === '/select-price' ||
          this.router.url === '/login'
        ) {
          if (
            new Date().getTime() - this.lastTimeBackPress <
            this.timePeriodToExit
          ) {
            navigator['app'].exitApp();
          } else {
            this.showToast();
            this.lastTimeBackPress = new Date().getTime();
          }
        }
      });
    });
  }
  closeMenu() {
    menuController.close();
  }
  async showToast() {
    const toast = await this.toastController.create({
      message: 'press back again to exit App.',
      duration: 2000
    });
    toast.present();
  }

  SignOut() {
    menuController.close();
    this.navCtrl.navigateRoot('/login');
  }

  setting() {
    menuController.close();
    this.navCtrl.navigateForward('/setting');
  }
}
