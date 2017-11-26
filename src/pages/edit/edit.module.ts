import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPage } from './edit';

import {MultiPickerModule} from 'ion-multi-picker';

@NgModule({
  declarations: [
    EditPage,
  ],
  imports: [
    MultiPickerModule,
    IonicPageModule.forChild(EditPage),
  ],
})
export class EditPageModule {}
