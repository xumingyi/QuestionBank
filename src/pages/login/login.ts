import {Component, ViewChild} from '@angular/core';

import {IonicPage, NavController, NavParams, ToastController, Slides} from 'ionic-angular';

import {UserDataProvider} from "../../providers/user-data/user-data";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login = {email: '', password: ''};
  forgetPassword = {email: ''};
  signUp = {email: '', password: '', passwordVerified: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public userDataProvider: UserDataProvider) {
  }

  @ViewChild('outerSlides') outerSlides: Slides;
  @ViewChild('innerSlides') innerSlides: Slides;

  ionViewWillEnter() {
    this.outerSlides.lockSwipes(true);
    this.innerSlides.lockSwipes(true);
  }

  slidesSlideNext(slides: Slides) {
    slides.lockSwipes(false);
    slides.slideNext();
    slides.lockSwipes(true);
  }

  slidesSlidePrev(slides: Slides) {
    slides.lockSwipes(false);
    slides.slidePrev();
    slides.lockSwipes(true);
  }

  onLogin() {
    let pattern = /^([a-zA-Z0-9]+[-_\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_\.]?)*[a-zA-Z0-9]+(\.[a-zA-Z]{2,18})+$/;
    if (this.login.email === '' || this.login.password === '') {
      this.presentToast('输入信息不能为空');
    } else if (!pattern.test(this.login.email)) {
      this.presentToast('邮箱格式不正确');
    } else {
      this.userDataProvider.loginOrSignUp(this.login.email, this.login.password);
      this.navCtrl.pop().then(value => {
        return value;
      });
      this.presentToast('登录成功');
    }
  }

  onSendEmail() {

  }

  onSignUp() {
    let pattern = /^([a-zA-Z0-9]+[-_\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_\.]?)*[a-zA-Z0-9]+(\.[a-zA-Z]{2,18})+$/;
    if (this.signUp.email === '' || this.signUp.password === '' || this.signUp.passwordVerified === '') {
      this.presentToast('输入信息不能为空');
    } else if (!pattern.test(this.signUp.email)) {
      this.presentToast('邮箱格式不正确');
    } else if (this.signUp.password !== this.signUp.passwordVerified) {
      this.presentToast('2次输入的密码不一致');
    } else {
      this.userDataProvider.loginOrSignUp(this.signUp.email, this.signUp.password);
      this.navCtrl.pop().then(value => {
        return value;
      });
      this.presentToast('注册成功');
    }
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({message: message, duration: 1500});
    toast.present().then(value => {
      return value;
    });
  }
}
