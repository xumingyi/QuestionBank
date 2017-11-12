import {Injectable} from '@angular/core';

import {SQLiteObject} from "@ionic-native/sqlite";

import {DataProvider} from "../data/data";

import {User} from "./user";

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {

  database: SQLiteObject;
  hasLoggedIn: Boolean;

  constructor(private dataProvider: DataProvider) {
    this.database = this.dataProvider.myAppDatabase;
    this.hasLoggedIn = false;
  }

  insertIntoUserTable(user: User) {
    this.database.executeSql('INSERT INTO users VALUES (?, ?, ?, NULL, NULL, NULL, NULL, NULL, NULL, NULL);', [user.email, user.username, user.password]).then(() => console.log('insert into users table successfully')).catch(e => console.log(e));
  }

  queryUserTable() {
    this.database.executeSql('SELECT * FROM users;', {}).then(() => console.log('query users table successfully')).catch(e => console.log(e));
  }

  updateUserTable(user: User) {
    this.database.executeSql('UPDATE users SET username=?, password=?, gender=?, age=?, birthday=?, intro=?, phone=?, location=?, avatar=? WHERE email=?;', [user.username, user.password, user.gender, user.age, user.birthday, user.intro, user.phone, user.location, user.avatar, user.email]).then(() => console.log('update users table successfully')).catch(e => console.log(e));
  }

}
