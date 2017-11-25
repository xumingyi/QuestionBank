import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

import {UserDataProvider} from "../../providers/user-data/user-data";

/**
 * Generated class for the EditPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-password',
  templateUrl: 'edit-password.html',
})
export class EditPasswordPage {

  password: string;
  passwordVerified: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public userDataProvider: UserDataProvider) {
  }

  save() {
    if (this.password === '' || this.passwordVerified === '') {
      this.presentToast('输入密码不能为空');
    } else if (this.password !== this.passwordVerified) {
      this.presentToast('2次输入的密码不一致');
    } else {
      this.userDataProvider.setPassword(this.password);
      this.navCtrl.pop().then(value => {
        return value;
      });
    }
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({message: message, duration: 1500});
    toast.present().then(value => {
      return value;
    });
  }

}
