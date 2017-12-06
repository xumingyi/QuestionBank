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

  userSingleSelectionAnswers: Array<string>;
  userMultipleChoiceAnswers: Array<Array<boolean>>;
  singleSelectionAnswers: Array<string>;
  multipleChoiceAnswers: Array<string>;
  userIsCorrect: Array<boolean>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public questionDataProvider: QuestionDataProvider) {
    this.examYear = this.navParams.get('examYear');
    this.questionNum = parseInt(this.navParams.get('questionNum'));
    this.exam = this.questionDataProvider.questions[this.examYear - 2007];

    this.userSingleSelectionAnswers = [];
    this.userMultipleChoiceAnswers = [];
    for (let i = 0; i < 33; i++) {
      this.userMultipleChoiceAnswers.push([false, false, false, false]);
    }
    this.singleSelectionAnswers = [];
    this.multipleChoiceAnswers = [];
    this.userIsCorrect = [];
  }

  @ViewChild('slides') slides: Slides;

  slideDidChange() {
    if (this.slides.getActiveIndex() === 33) {
      this.questionNum = this.slides.getActiveIndex();
    } else {
      this.questionNum = this.slides.getActiveIndex() + 1;
    }
  }

  submit1() {
    if (this.exam[this.questionNum - 1]['AIsCorrect'] === true) {
      this.singleSelectionAnswers[this.questionNum - 1] = "A";
    }
    if (this.exam[this.questionNum - 1]['BIsCorrect'] === true) {
      this.singleSelectionAnswers[this.questionNum - 1] = "B";
    }
    if (this.exam[this.questionNum - 1]['CIsCorrect'] === true) {
      this.singleSelectionAnswers[this.questionNum - 1] = "C";
    }
    if (this.exam[this.questionNum - 1]['DIsCorrect'] === true) {
      this.singleSelectionAnswers[this.questionNum - 1] = "D";
    }

    this.singleSelectionAnswers[this.questionNum - 1] === this.userSingleSelectionAnswers[this.questionNum - 1] ? this.userIsCorrect[this.questionNum - 1] = true : this.userIsCorrect[this.questionNum - 1] = false;
  }

  submit2() {
    this.multipleChoiceAnswers[this.questionNum - 1] = "";

    if (this.exam[this.questionNum - 1]['AIsCorrect'] === true) {
      this.multipleChoiceAnswers[this.questionNum - 1] += " A";
    }
    if (this.exam[this.questionNum - 1]['BIsCorrect'] === true) {
      this.multipleChoiceAnswers[this.questionNum - 1] += " B";
    }
    if (this.exam[this.questionNum - 1]['CIsCorrect'] === true) {
      this.multipleChoiceAnswers[this.questionNum - 1] += " C";
    }
    if (this.exam[this.questionNum - 1]['DIsCorrect'] === true) {
      this.multipleChoiceAnswers[this.questionNum - 1] += " D";
    }

    if (typeof(this.userMultipleChoiceAnswers[this.questionNum - 1][0]) === "undefined") {
      this.userMultipleChoiceAnswers[this.questionNum - 1][0] = false;
    }
    if (typeof(this.userMultipleChoiceAnswers[this.questionNum - 1][1]) === "undefined") {
      this.userMultipleChoiceAnswers[this.questionNum - 1][1] = false;
    }
    if (typeof(this.userMultipleChoiceAnswers[this.questionNum - 1][2]) === "undefined") {
      this.userMultipleChoiceAnswers[this.questionNum - 1][2] = false;
    }
    if (typeof(this.userMultipleChoiceAnswers[this.questionNum - 1][3]) === "undefined") {
      this.userMultipleChoiceAnswers[this.questionNum - 1][3] = false;
    }

    this.exam[this.questionNum - 1]['AIsCorrect'] === this.userMultipleChoiceAnswers[this.questionNum - 1][0] && this.exam[this.questionNum - 1]['BIsCorrect'] === this.userMultipleChoiceAnswers[this.questionNum - 1][1] && this.exam[this.questionNum - 1]['CIsCorrect'] === this.userMultipleChoiceAnswers[this.questionNum - 1][2] && this.exam[this.questionNum - 1]['DIsCorrect'] === this.userMultipleChoiceAnswers[this.questionNum - 1][3] ? this.userIsCorrect[this.questionNum - 1] = true : this.userIsCorrect[this.questionNum - 1] = false;
  }

}
