import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {UserDataProvider} from "../../providers/user-data/user-data";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  editPage = 'EditPage';

  avatar: string;
  username: string;
  gender: string;
  birthday: string;
  age: number;
  intro: string;
  email: string;
  phone: string;
  location: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userDataProvider: UserDataProvider) {
  }

  openPage(page: string) {
    return this.navCtrl.push(page).then(value => {
      return value;
    });
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

  ionViewDidEnter() {
    this.setAge(this.birthday);
    this.getAge();
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
      if (gender) {
        this.gender = "男";
      } else {
        this.gender = "女";
      }
    });
  }

  getBirthday() {
    this.userDataProvider.getBirthday().then(birthday => {
      this.birthday = birthday;
    });
  }

  setAge(birthday: string) {
    let age = new Date().getFullYear() - parseInt(birthday.split("/")[0]);
    this.userDataProvider.setAge(age);
  }

  getAge() {
    this.userDataProvider.getAge().then(age => {
      this.age = age;
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
      this.location = location.split(" ")[2];
    });
  }

}
