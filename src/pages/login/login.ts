import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  @ViewChild("outerSlides") outerSlides: Slides;
  @ViewChild("innerSlides") innerSlides: Slides;

  outerSlideToNext() {
    this.outerSlides.slideNext();
  }

  outerSlideToPrev() {
    this.outerSlides.slidePrev();
  }

  innerSlideToNext() {
    this.innerSlides.slideNext();
  }

  innerSlideToPrev() {
    this.innerSlides.slidePrev();
  }

}
