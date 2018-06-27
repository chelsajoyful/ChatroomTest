import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SettingsNotificationsPage } from './settingsNotifications';

@NgModule({
  declarations: [
    SettingsNotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsNotificationsPage),
    TranslateModule.forChild()
  ],
  exports: [
    SettingsNotificationsPage
  ]
})
export class SettingsNotificationsPageModule { }
