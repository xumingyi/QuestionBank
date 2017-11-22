import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {UserDataProvider} from "../../providers/user-data/user-data";

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

  hasLoggedIn: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userDataProvider: UserDataProvider) {
  }

  ionViewDidEnter() {
    this.getLoginStatus();
  }

  getLoginStatus() {
    this.userDataProvider.getLoginStatus().then(hasLoggedIn => {
      this.hasLoggedIn = hasLoggedIn;
    });
  }

  logout() {
    this.userDataProvider.logout();
    this.navCtrl.pop().then(value => {
      return value;
    });
  }

}
