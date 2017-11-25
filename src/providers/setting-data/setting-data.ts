import {Injectable} from '@angular/core';

import {BehaviorSubject} from "rxjs/BehaviorSubject";

/*
  Generated class for the SettingDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingDataProvider {

  // true: dark-theme
  // false: light-theme
  theme: BehaviorSubject<boolean>;

  constructor() {
    this.theme = new BehaviorSubject(false);
  }

  setActiveTheme(theme) {
    this.theme.next(theme);
  }

  getActiveTheme() {
    return this.theme.asObservable();
  }

}
