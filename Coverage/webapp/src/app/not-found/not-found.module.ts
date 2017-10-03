import { NgModule } from '@angular/core';

import { NotFoundComponent } from './not-found.component';
import { UsedMaterialModule } from '../shared/used-material.module';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    UsedMaterialModule
  ],
  exports: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
