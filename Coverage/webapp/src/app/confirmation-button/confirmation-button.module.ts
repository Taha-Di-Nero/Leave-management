import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { UsedMaterialModule } from '../shared/used-material.module';
import { ConfirmationButtonComponent } from './confirmation-button.component';
import { CriticalConfirmationButtonComponent } from './critical-confirmation-button.component';

@NgModule({
  declarations: [
    ConfirmationButtonComponent,
    CriticalConfirmationButtonComponent
  ],
  imports: [
    CommonModule,
    ConfirmationPopoverModule.forRoot({
      appendToBody: true,
      confirmText: 'Continua',
      cancelText: 'Annulla'
    }),
    NgbModule,
    UsedMaterialModule
  ],
  exports: [
    ConfirmationButtonComponent,
    CriticalConfirmationButtonComponent
  ]

})

export class ConfirmationButtonModule { }
