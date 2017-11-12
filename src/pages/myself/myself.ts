import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {LoginPage} from "../login/login";
import {ProfilePage} from "../profile/profile";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public userDataProvider: UserDataProvider) {
  }

  openLoginPage() {
    this.navCtrl.push(LoginPage);
  }

  openProfilePage() {
    this.navCtrl.push(ProfilePage);
  }

}
