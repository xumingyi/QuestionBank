import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ProblemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-problem',
  templateUrl: 'problem.html',
})
export class ProblemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

}
