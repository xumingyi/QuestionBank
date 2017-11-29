import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';

import {QuestionDataProvider} from "../../providers/question-data/question-data";

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

  examYear: number;
  questionNum: number;
  exam: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public questionDataProvider: QuestionDataProvider) {
    this.examYear = this.navParams.get('examYear');
    this.questionNum = parseInt(this.navParams.get('questionNum'));
    this.exam = this.questionDataProvider.questions[this.examYear - 2007];
  }

  @ViewChild('slides') slides: Slides;

  slideDidChange() {
    if (this.slides.getActiveIndex() === 33) {
      this.questionNum = this.slides.getActiveIndex();
    } else {
      this.questionNum = this.slides.getActiveIndex() + 1;
    }
  }

}
