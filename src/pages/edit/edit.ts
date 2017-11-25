import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ActionSheetController} from 'ionic-angular';

import {UserDataProvider} from "../../providers/user-data/user-data";

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  editUsernamePage = 'EditUsernamePage';
  editIntroPage = 'EditIntroPage';
  editPhonePage = 'EditPhonePage';

  avatar: string;
  username: string;
  gender: boolean;
  birthday: string;
  intro: string;
  email: string;
  phone: string;
  location: string;

  maxDate: string = new Date().toLocaleDateString().replace(/[^\d]/g, '-');

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public userDataProvider: UserDataProvider) {
  }

  ionViewWillEnter() {
    this.getAvatar();
    this.getUsername();
    this.getGender();
    this.getBirthday();
    this.getIntro();
    this.getEmail();
    this.getPhone();
    this.getLocation();
  }

  save() {
    this.userDataProvider.setGender(this.gender);
    this.userDataProvider.setBirthday(this.birthday.replace(/[^\d]/g, '/'));
    this.navCtrl.pop().then(value => {
      return value;
    });
  }

  openPage(page: string) {
    return this.navCtrl.push(page).then(value => {
      return value;
    });
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [{
        text: '拍照',
        role: 'takePhoto',
        handler: () => {
          console.log('take photo');
        }
      }, {
        text: '从相册选择',
        role: 'chooseFromAlbum',
        handler: () => {
          console.log('choose from album');
        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          console.log('cancel');
        }
      }]
    });

    actionSheet.present();
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

  getGender() {
    this.userDataProvider.getGender().then(gender => {
      this.gender = gender;
    });
  }

  getBirthday() {
    this.userDataProvider.getBirthday().then(birthday => {
      this.birthday = birthday.replace(/[^\d]/g, '-');
    });
  }

  getIntro() {
    this.userDataProvider.getIntro().then(intro => {
      this.intro = intro;
    });
  }

  getEmail() {
    this.userDataProvider.getEmail().then(email => {
      this.email = email;
    });
  }

  getPhone() {
    this.userDataProvider.getPhone().then(phone => {
      this.phone = phone;
    });
  }

  getLocation() {
    this.userDataProvider.getLocation().then(location => {
      this.location = location;
    });
  }

}
