import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ExamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class ExamPage {

  exams: Array<{ img: string, year: number, problemNum: number, collectionNum: number }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.exams = [];

    for (let i = 0; i < 10; i++) {
      this.exams.push({
        img: "assets/img/card/card-" + (2017 - i) + ".jpg",
        year: 2017 - i,
        problemNum: 0,
        collectionNum: 0,
      });
    }
  }
}
