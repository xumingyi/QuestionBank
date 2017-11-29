import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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

  rows: any[] = [['01', '02', '03', '04', '05'], ['06', '07', '08', '09', '10'], ['11', '12', '13', '14', '15'], ['16', '17', '18', '19', '20'], ['21', '22', '23', '24', '25'], ['26', '27', '28', '29', '30'], ['31', '32', '33']];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.examYear = this.navParams.get('examYear');

    this.questionNum = this.navParams.data.questionNum;

  }

  openQuestionPage(examYear, questionNum) {
    this.navCtrl.push('QuestionPage', {examYear: examYear, questionNum: questionNum});
  }

}
