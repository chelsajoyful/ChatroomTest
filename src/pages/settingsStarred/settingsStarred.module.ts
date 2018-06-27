import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SettingsStarredPage } from './settingsStarred';

@NgModule({
  declarations: [
    SettingsStarredPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsStarredPage),
    TranslateModule.forChild()
  ],
  exports: [
    SettingsStarredPage
  ]
})
export class SettingsStarredPageModule { }
