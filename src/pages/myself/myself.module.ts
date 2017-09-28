import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyselfPage } from './myself';

@NgModule({
  declarations: [
    MyselfPage,
  ],
  imports: [
    IonicPageModule.forChild(MyselfPage),
  ],
})
export class MyselfPageModule {}
