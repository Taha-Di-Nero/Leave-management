import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { UsedMaterialModule } from '../shared/used-material.module';
import { DeleteButtonComponent } from './delete-button.component';

@NgModule({
  declarations: [
    DeleteButtonComponent
  ],
  imports: [
    CommonModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger',
      confirmText: 'Elimina',
      cancelText: 'Annulla'
    }),
    NgbModule,
    UsedMaterialModule
  ],
  exports: [
    DeleteButtonComponent
  ]

})

export class DeleteButtonModule { }
