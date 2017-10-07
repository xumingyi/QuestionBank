import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {CatalogPage} from "../catalog/catalog";

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

  exams: Array<{ backgroundImg: string, year: number, problemNum: number, collectionNum: number, finishedTime: string }> = [];
  exam_year: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    for (let i = 0; i < 10; i++) {
      this.exams.push({
        backgroundImg: "assets/img/card/card-" + (2017 - i) + ".jpg",
        year: 2017 - i,
        problemNum: 0,
        collectionNum: 0,
        finishedTime: "00:00:00"
      });
    }

    this.exam_year = this.navParams.data.exam_year;

  }

  openCatalogPage(exam_year) {
    this.navCtrl.push(CatalogPage, {exam_year: exam_year});
  }
}
