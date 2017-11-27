import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

import {UserDataProvider} from "../../providers/user-data/user-data";

/**
 * Generated class for the EditPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-phone',
  templateUrl: 'edit-phone.html',
})
export class EditPhonePage {

  phone: string;

  editInfo = [];
  callback: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public userDataProvider: UserDataProvider) {
    this.editInfo = this.navParams.get('editInfo');
    this.callback = this.navParams.get('callback');
  }

  ionViewWillEnter() {
    this.getPhone();
  }

  getPhone() {
    this.userDataProvider.getPhone().then(phone => {
      this.phone = phone;
    });
  }

  save() {
    let pattern = /^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/;
    if (!pattern.test(this.phone)) {
      this.presentToast('输入的手机号码不正确');
    } else {
      this.userDataProvider.setPhone(this.phone);
      this.callback(this.editInfo).then(() =>
        this.navCtrl.pop().then(value => {
          return value;
        })
      );
    }
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({message: message, duration: 1500});
    toast.present().then(value => {
      return value;
    });
  }

}
