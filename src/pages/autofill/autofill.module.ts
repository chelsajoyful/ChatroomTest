import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AutofillPage } from './autofill';

@NgModule({
  declarations: [
    AutofillPage,
  ],
  imports: [
    IonicPageModule.forChild(AutofillPage),
    TranslateModule.forChild()
  ],
  exports: [
    AutofillPage
  ]
})
export class AutofillPageModule { }
