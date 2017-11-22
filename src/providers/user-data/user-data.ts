import {Injectable} from '@angular/core';

import {Storage} from '@ionic/storage';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {

  constructor(public storage: Storage) {

  }

  getLoginStatus() {
    return this.storage.get('has_logged_in').then(value => {
      return value;
    });
  }

  getUsername() {
    return this.storage.get('username').then(value => {
      return value;
    });
  }

  getPassword() {
    return this.storage.get('password').then(value => {
      return value;
    });
  }

  getGender() {
    return this.storage.get('is_male').then(value => {
      return value;
    });
  }

  getAge() {
    return this.storage.get('age').then(value => {
      return value;
    });
  }

  getBirthday() {
    return this.storage.get('birthday').then(value => {
      return value;
    });
  }

  getIntro() {
    return this.storage.get('intro').then(value => {
      return value;
    });
  }

  getEmail() {
    return this.storage.get('email').then(value => {
      return value;
    });
  }

  getPhone() {
    return this.storage.get('phone').then(value => {
      return value;
    });
  }

  getLocation() {
    return this.storage.get('location').then(value => {
      return value;
    });
  }

  getAvatar() {
    return this.storage.get('avatar').then(value => {
      return value;
    });
  }

  setLoginStatus(hasLoggedIn: boolean) {
    this.storage.set('has_logged_in', hasLoggedIn).then(value => {
      return value;
    });
  }

  setUsername(username: string) {
    this.storage.set('username', username).then(value => {
      return value;
    });
  }

  setPassword(password: string) {
    this.storage.set('password', password).then(value => {
      return value;
    });
  }

  setGender(isMale: boolean) {
    this.storage.set('is_male', isMale).then(value => {
      return value;
    });
  }

  setAge(age: number) {
    this.storage.set('age', age).then(value => {
      return value;
    });
  }

  setBirthday(birthday: string) {
    this.storage.set('birthday', birthday).then(value => {
      return value;
    });
  }

  setIntro(intro: string) {
    this.storage.set('intro', intro).then(value => {
      return value;
    });
  }

  setEmail(email: string) {
    this.storage.set('email', email).then(value => {
      return value;
    });
  }

  setPhone(phone: string) {
    this.storage.set('phone', phone).then(value => {
      return value;
    });
  }

  setLocation(location: string) {
    this.storage.set('location', location).then(value => {
      return value;
    });
  }

  setAvatar(avatar: string) {
    this.storage.set('avatar', avatar).then(value => {
      return value;
    });
  }

  removeLoginStatus() {
    this.storage.remove('has_logged_in').then(value => {
      return value;
    });
  }

  removeUsername() {
    this.storage.remove('username').then(value => {
      return value;
    });
  }

  removePassword() {
    this.storage.remove('password').then(value => {
      return value;
    });
  }

  removeGender() {
    this.storage.remove('is_male').then(value => {
      return value;
    });
  }

  removeAge() {
    this.storage.remove('age').then(value => {
      return value;
    });
  }

  removeBirthday() {
    this.storage.remove('birthday').then(value => {
      return value;
    });
  }

  removeIntro() {
    this.storage.remove('intro').then(value => {
      return value;
    });
  }

  removeEmail() {
    this.storage.remove('email').then(value => {
      return value;
    });
  }

  removePhone() {
    this.storage.remove('phone').then(value => {
      return value;
    });
  }

  removeLocation() {
    this.storage.remove('location').then(value => {
      return value;
    });
  }

  removeAvatar() {
    this.storage.remove('avatar').then(value => {
      return value;
    });
  }

  loginOrSignUp(email: string, password: string) {
    this.setLoginStatus(true);
    this.setUsername(email);
    this.setPassword(password);
    this.setGender(true);
    this.setAge(0);
    this.setBirthday(null);
    this.setIntro('');
    this.setEmail(email);
    this.setPhone('');
    this.setLocation('');
    this.setAvatar('assets/avatar/avatar.png');
  }

  logout() {
    this.removeLoginStatus();
    this.removeUsername();
    this.removePassword();
    this.removeGender();
    this.removeAge();
    this.removeBirthday();
    this.removeIntro();
    this.removeEmail();
    this.removePhone();
    this.removeLocation();
    this.removeAvatar();
  }

}
