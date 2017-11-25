import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

import {UserDataProvider} from "../../providers/user-data/user-data";
import {SettingDataProvider} from "../../providers/setting-data/setting-data";

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  editPasswordPage = 'EditPasswordPage';

  hasLoggedIn: boolean;
  theme: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public userDataProvider: UserDataProvider, public settingDataProvider: SettingDataProvider) {
    this.getActiveTheme();
  }

  ionViewDidEnter() {
    this.getLoginStatus();
  }

  getLoginStatus() {
    this.userDataProvider.getLoginStatus().then(hasLoggedIn => {
      this.hasLoggedIn = hasLoggedIn;
    });
  }

  getActiveTheme() {
    this.settingDataProvider.getActiveTheme().subscribe(theme => {
      this.theme = theme;
    });
  }

  openPage(page: string) {
    return this.navCtrl.push(page).then(value => {
      return value;
    });
  }

  toggleTheme() {
    if (!this.theme) {
      this.presentToast('关闭应用后夜间模式将失效');
    }
    this.settingDataProvider.setActiveTheme(!this.theme);
  }

  logout() {
    this.userDataProvider.logout();
    this.navCtrl.pop().then(value => {
      return value;
    });
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({message: message, duration: 2000});
    toast.present().then(value => {
      return value;
    });
  }

}
