import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { WritePostPage } from './writePost';

@NgModule({
  declarations: [
    WritePostPage,
  ],
  imports: [
    IonicPageModule.forChild(WritePostPage),
    TranslateModule.forChild()
  ],
  exports: [
    WritePostPage
  ]
})
export class WritePostPageModule { }
