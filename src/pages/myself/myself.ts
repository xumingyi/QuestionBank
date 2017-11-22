import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {UserDataProvider} from "../../providers/user-data/user-data";

/**
 * Generated class for the MyselfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-myself',
  templateUrl: 'myself.html',
})
export class MyselfPage {

  loginPage = 'LoginPage';
  profilePage = 'ProfilePage';

  hasLoggedIn: boolean;
  avatar: string;
  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userDataProvider: UserDataProvider) {
  }

  openPage(page: string) {
    return this.navCtrl.push(page).then(value => {
      return value;
    });
  }

  ionViewDidEnter() {
    this.getLoginStatus();
    this.getAvatar();
    this.getUsername();
  }

  getLoginStatus() {
    this.userDataProvider.getLoginStatus().then(hasLoggedIn => {
      this.hasLoggedIn = hasLoggedIn;
    });
  }

  getAvatar() {
    this.userDataProvider.getAvatar().then(avatar => {
      this.avatar = avatar;
    });
  }

  getUsername() {
    this.userDataProvider.getUsername().then(username => {
      this.username = username;
    });
  }

}
