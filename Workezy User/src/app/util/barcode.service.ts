import { Platform } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {

   constructor(private barcodeScanner: BarcodeScanner, private platform: Platform) { }

  async scan(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.platform.is('cordova')) {
        const obj = {
          cancelled: false,
          format: 'EAN_13',
          text: '7502271153193',
        };
        return resolve(obj);

      } else {
        this.barcodeScanner.scan().then((barcodeData) => {
          console.log('Barcode data', barcodeData);
          return resolve(barcodeData);
         }).catch(err => {
              console.log('Error', err);
              return reject(null);
         });
      }
    });
  }
}
