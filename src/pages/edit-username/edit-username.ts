import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {UserDataProvider} from "../../providers/user-data/user-data";

/**
 * Generated class for the EditUsernamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-username',
  templateUrl: 'edit-username.html',
})
export class EditUsernamePage {

  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userDataProvider: UserDataProvider) {
  }

  ionViewWillEnter() {
    this.getUsername();
  }

  getUsername() {
    this.userDataProvider.getUsername().then(username => {
      this.username = username;
    });
  }

  save() {
    this.userDataProvider.setUsername(this.username);
    this.navCtrl.pop().then(value => {
      return value;
    });
  }

}
