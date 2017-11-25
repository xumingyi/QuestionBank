import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditIntroPage } from './edit-intro';

@NgModule({
  declarations: [
    EditIntroPage,
  ],
  imports: [
    IonicPageModule.forChild(EditIntroPage),
  ],
})
export class EditIntroPageModule {}
