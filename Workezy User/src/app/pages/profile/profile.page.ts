import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  editbtn: any = 0;
  data: any = {
    ranking: '100 ecocreditos',
    address: 'Cancún, Quintana Roo'
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
