
import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from '@angular/core';

import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmationButtonType } from '../shared/enums';
import { ConfirmationButtonComponent } from './confirmation-button.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-critical-confirmation-button',
  templateUrl: './confirmation-button.component.html',
  styles: [`
            ::ng-deep .popover-header {
               color: white !important;
               background-color: #dc3545 !important;
               font-weight: bolder !important;
            }
            ::ng-deep .popover-body {
                padding: 1rem 1rem 1rem .75rem !important;
            }
            ::ng-deep .btn {
               line-height: 1 !important;
            }`
  ]
})
export class CriticalConfirmationButtonComponent extends ConfirmationButtonComponent {

  confirmButtonType = ConfirmationButtonType.Danger;
  title = 'Attenzione';

}
