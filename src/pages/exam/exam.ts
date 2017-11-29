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

  exams: Array<{ backgroundImg: string, examYear: number, problemNum: number, collectionNum: number, finishedTime: string }> = [];
  examYear: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    for (let i = 0; i < 11; i++) {
      this.exams.push({
        backgroundImg: "assets/img/card/card-" + (2017 - i) + ".jpg",
        examYear: 2017 - i,
        problemNum: 0,
        collectionNum: 0,
        finishedTime: "00:00:00"
      });
    }

    this.examYear = this.navParams.data.examYear;

  }

  openCatalogPage(examYear: number) {
    this.navCtrl.push('CatalogPage', {examYear: examYear});
  }
}
