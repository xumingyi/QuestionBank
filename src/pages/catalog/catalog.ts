import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {QuestionPage} from "../question/question";

/**
 * Generated class for the CatalogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalog',
  templateUrl: 'catalog.html',
})
export class CatalogPage {

  examYear: number;
  questionNum: string;
  rows: Array<[number, Array<string>]> = [[1, ['01', '02', '03', '04', '05']], [2, ['06', '07', '08', '09', '10']], [3, ['11', '12', '13', '14', '15']], [4, ['16', '17', '18', '19', '20']], [5, ['21', '22', '23', '24', '25']], [6, ['26', '27', '28', '29', '30']], [7, ['31', '32', '33']]];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.examYear = this.navParams.get('examYear');

    this.questionNum = this.navParams.data.questionNum;

  }

  openQuestionPage(examYear, questionNum) {
    this.navCtrl.push(QuestionPage, {examYear: examYear, questionNum: questionNum});
  }

}
