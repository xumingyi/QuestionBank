import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ScreenOrientation} from "@ionic-native/screen-orientation";
import {SQLite} from "@ionic-native/sqlite";

import {MyApp} from './app.component';

import {DataProvider} from '../providers/data/data';
import {UserDataProvider} from '../providers/user-data/user-data';

// ionic storage
/*import {IonicStorageModule} from "@ionic/storage";*/

// ionic pro monitoring
import {Pro} from '@ionic/pro';
import { ExamDataProvider } from '../providers/exam-data/exam-data';
import { QuestionDataProvider } from '../providers/question-data/question-data';

const IonicPro = Pro.init('d6a25364', {
  appVersion: "0.0.1"
});

export class MyErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    IonicPro.monitoring.handleNewError(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true,
      backButtonText: ''
    }),
    // ionic storage
    /*IonicStorageModule.forRoot({
      name: 'myApp',
      driverOrder: ['sqlite', 'indexeddb', 'websql']
    })*/
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    SQLite,
    DataProvider,
    UserDataProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: ErrorHandler, useClass: MyErrorHandler},
    ExamDataProvider,
    QuestionDataProvider,
  ]
})

export class AppModule {

}
