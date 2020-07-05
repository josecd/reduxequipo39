import { Router } from '@angular/router';
import { BarcodeService } from './../util/barcode.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
declare var $;
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(private navCtrl: NavController, private keyboard: Keyboard,
    private _barcodeService: BarcodeService,
    private router: Router,
    ) {
    this.keyboard.onKeyboardWillShow().subscribe(() => {
      $('#add_fabBtn').hide();
    });
    this.keyboard.onKeyboardWillHide().subscribe(() => {
      $('#add_fabBtn').show();
    });
  }

 async jobpost() {
   
  const barcodeData = await this._barcodeService.scan();
  // this.messagesCtrl.presentLoading('Por favor, espere...');

  console.log(barcodeData);
  
  if (barcodeData.text) {
          this.router.navigateByUrl(`/producto/${barcodeData.text}`);
       
  } else {
    // let a = await this.messagesCtrl.hideLoader();
  }
  console.log('DATOS EN HPME', barcodeData);
  }
}
