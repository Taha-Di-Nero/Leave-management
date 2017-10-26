
import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationButtonType } from '../shared/enums';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-confirmation-button',
  templateUrl: './confirmation-button.component.html',
  styles: [`
            ::ng-deep .popover-header {
               color: white !important;
               background-color: #28a745 !important;
            }
            ::ng-deep .btn {
               line-height: 1 !important;
            }`
  ]
})
export class ConfirmationButtonComponent {

  @ViewChild('t') public tooltip: NgbTooltip;

  @Input() placement = 'left';
  @Input() message = `Si desidera eliminare ?`;

  @Output() confirm = new EventEmitter<boolean>();

  title = 'Conferma';
  confirmButtonType = ConfirmationButtonType.Success;

  confirmClicked = false;
  cancelClicked = false;

  constructor(private ref: ChangeDetectorRef) { }

  canceled(): void {
    this.tooltip.close();
    this.ref.markForCheck();
    this.confirm.emit(false);
  }

  confirmed(): void {
    this.tooltip.close();
    this.ref.markForCheck();
    this.confirm.emit(true);
  }

}
