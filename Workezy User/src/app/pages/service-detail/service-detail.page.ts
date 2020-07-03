import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServiceDetailPage implements OnInit {
  isjobpost: any;
  data: any = {
    category: 'AC',
    type: 'AC Repair',
    company: 'Mitsubishi',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptas recusandae cum doloribus delectus ea repellat at atque similique ipsam velit totam quam, necessitatibus ipsum enim nihil optio cumque facere.',
    timeSlot: [
      '08:30 AM',
      '09:00 AM',
      '09:30 AM',
      '10:00 AM',
      '10:30 AM',
      '11:00 AM',
      '11:30 AM'
    ]
  };
  eventSource;
  viewTitle;

  isToday: boolean;
  calendar = {
    mode: 'month',
    currentDate: new Date(),
    dateFormatter: {
      formatMonthViewDay: function(date: Date) {
        return date.getDate().toString();
      },
      formatMonthViewDayHeader: function(date: Date) {
        return 'MonMH';
      },
      formatMonthViewTitle: function(date: Date) {
        return 'testMT';
      },
      formatWeekViewDayHeader: function(date: Date) {
        return 'MonWH';
      },
      formatWeekViewTitle: function(date: Date) {
        return 'testWT';
      },
      formatWeekViewHourColumn: function(date: Date) {
        return 'testWH';
      },
      formatDayViewHourColumn: function(date: Date) {
        return 'testDH';
      },
      formatDayViewTitle: function(date: Date) {
        return 'testDT';
      }
    }
  };
  activeSlot: any;

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) {
    if (localStorage.getItem('isjobpost') == 'true') {
      this.isjobpost = true;
    } else {
      this.isjobpost = false;
    }
  }

  ngOnInit() {
    this.loadEvents();
  }

  Booking() {
    if (localStorage.getItem('isjobpost') == 'true') {
      if (localStorage.getItem('isLogin') == 'true') {
        this.navCtrl.navigateForward(['post-status']);
      } else {
        this.navCtrl.navigateForward('/login');
      }
    } else {
      if (localStorage.getItem('isLogin') == 'true') {
        this.navCtrl.navigateForward(['tabs/booking']);
      } else {
        this.navCtrl.navigateForward('/login');
      }
    }
  }

  loadEvents() {
    this.eventSource = this.createRandomEvents();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {}

  changeMode(mode) {
    this.calendar.mode = mode;
  }

  today() {
    this.calendar.currentDate = new Date();
  }

  onTimeSelected(ev) {}

  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }

  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 50; i += 1) {
      var date = new Date();
      var eventType = Math.floor(Math.random() * 2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;
      if (eventType === 0) {
        startTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + startDay
          )
        );
        if (endDay === startDay) {
          endDay += 1;
        }
        endTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + endDay
          )
        );
        events.push({
          title: 'All Day - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: true
        });
      } else {
        var startMinute = Math.floor(Math.random() * 24 * 60);
        var endMinute = Math.floor(Math.random() * 180) + startMinute;
        startTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + startDay,
          0,
          date.getMinutes() + startMinute
        );
        endTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + endDay,
          0,
          date.getMinutes() + endMinute
        );
        events.push({
          title: 'Event - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false
        });
      }
    }
    return events;
  }
  setTimeSlot(data) {
    this.activeSlot = data;
  }

  onRangeChanged(ev) {}

  markDisabled = (date: Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
  };
  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Select Service',
      inputs: [
        {
          name: 'Kirakwall',
          type: 'radio',
          label: 'AC',
          value: 'AC',
          checked: true
        },
        {
          name: 'Kirakwall2',
          type: 'radio',
          label: 'Refrigerator',
          value: 'Refrigerator'
        },
        {
          name: 'Kirakwall3',
          type: 'radio',
          label: 'Car Repaire',
          value: 'Car Repaire'
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
            this.data.category = data;
          }
        }
      ]
    });

    await alert.present();
  }
}
