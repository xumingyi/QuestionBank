import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {UserDataProvider} from "../../providers/user-data/user-data";

/**
 * Generated class for the EditIntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-intro',
  templateUrl: 'edit-intro.html',
})
export class EditIntroPage {

  intro: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userDataProvider: UserDataProvider) {
  }

  ionViewWillEnter() {
    this.getIntro();
  }

  getIntro() {
    this.userDataProvider.getIntro().then(intro => {
      this.intro = intro;
    });
  }

  save() {
    this.userDataProvider.setIntro(this.intro);
    this.navCtrl.pop().then(value => {
      return value;
    });
  }

}
