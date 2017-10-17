import { NgModule } from '@angular/core';

import { UsedMaterialModule } from '../shared/used-material.module';
import { AccessDeniedComponent } from './access-denied.component';


@NgModule({
  declarations: [
    AccessDeniedComponent
  ],
  imports: [
    UsedMaterialModule
  ],
  exports: [
    AccessDeniedComponent
  ],
  entryComponents: [
    AccessDeniedComponent
  ]
})
export class AccessDeniedModule { }
