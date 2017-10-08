import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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
  questionNum: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.examYear = this.navParams.get('examYear');
    this.questionNum = this.navParams.get('questionNum');

  }

}
