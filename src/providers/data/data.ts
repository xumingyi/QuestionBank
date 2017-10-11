import {Injectable} from '@angular/core';

import {SQLite, SQLiteObject} from "@ionic-native/sqlite";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  myAppDatabase: SQLiteObject;

  constructor(private sqlite: SQLite) {

  }

  initDatabase() {
    this.sqlite.create({
      name: 'myApp.db',
      location: 'default'
    }).then((database: SQLiteObject) => {
      database.executeSql('CREATE TABLE IF NOT EXISTS users(email VARCHAR(320) PRIMARY KEY, username VARCHAR(20) NOT NULL, password VARCHAR(30) NOT NULL, gender BOOLEAN, age TINYINT, birthday DATE, intro VARCHAR(300), phone CHAR(11), location VARCHAR(100), avatar VARCHAR(100));', {}).then(() => console.log('init database successfully')).catch(e => console.log(e));
      this.myAppDatabase = database;
    })
  }

}
