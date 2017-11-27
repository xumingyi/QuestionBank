import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ScreenOrientation} from "@ionic-native/screen-orientation";
import {Camera} from "@ionic-native/camera";
import {ImagePicker} from "@ionic-native/image-picker";
import {SQLite} from "@ionic-native/sqlite";
import {IonicStorageModule} from "@ionic/storage";

import {MultiPickerModule} from 'ion-multi-picker';

import {MyApp} from './app.component';

// ionic pro monitoring
import {Pro} from '@ionic/pro';

import {UserDataProvider} from '../providers/user-data/user-data';
import {SettingDataProvider} from '../providers/setting-data/setting-data';
import {CityDataProvider} from '../providers/city-data/city-data';

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
    MultiPickerModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true,
      backButtonText: ''
    }),
    IonicStorageModule.forRoot({
      name: 'myApp',
      driverOrder: ['sqlite', 'indexeddb', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    Camera,
    ImagePicker,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: ErrorHandler, useClass: MyErrorHandler},
    UserDataProvider,
    SettingDataProvider,
    CityDataProvider,
  ]
})

export class AppModule {

}
