import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  editbtn: any = 0;
  data: any = {
    name: 'Larry Gordon',
    email: 'larrygordon@gmail.com',
    phone: '+44 903 365 8768',
    address: 'Rain Charm House Park, London'
  };
  constructor() {}

  ngOnInit() {}

  editData() {
    this.editbtn = 1;
  }
  saveData() {
    this.editbtn = 0;
  }
}
