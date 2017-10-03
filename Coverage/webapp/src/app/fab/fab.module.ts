import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FabComponent } from './fab.component';
import { UsedMaterialModule } from '../shared/used-material.module';

@NgModule({
  declarations: [
    FabComponent
  ],
  imports: [
    CommonModule,
    UsedMaterialModule,
    NgbModule
  ],
  exports: [
    FabComponent
  ]
})

export class FabModule { }
