import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BlockUIModule } from 'ng-block-ui';

import { UsedMaterialModule } from '../shared/used-material.module';
import { LeavesApprovationComponent } from './leaves-approvation.component';
import { ConfirmationButtonModule } from '../confirmation-button/confirmation-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ToastrModule,
    BlockUIModule,
    ConfirmationButtonModule,
    UsedMaterialModule,
  ],
  declarations: [
    LeavesApprovationComponent
  ],
  exports: [
    LeavesApprovationComponent
  ]
})
export class LeavesApprovationModule { }
