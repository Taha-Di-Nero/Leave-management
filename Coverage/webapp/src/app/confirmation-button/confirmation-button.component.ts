
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
export class ConfirmationButtonComponent {

  @ViewChild('t') public tooltip: NgbTooltip;

  @Input() placement = 'left';

  @Output() confirm = new EventEmitter<boolean>();

  title = 'Conferma';
  confirmButtonType = ConfirmationButtonType.Success;

  confirmClicked = false;
  cancelClicked = false;

  private _message = '';

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

  @Input()
  set message(msg: string) {
    this._message = msg;
  }

  get message(): string {
    return `<p><strong>${this._message}</strong></p>`;
  }

}
