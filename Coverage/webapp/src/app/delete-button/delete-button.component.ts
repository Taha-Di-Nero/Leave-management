import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styles: []
})
export class DeleteButtonComponent {

  @ViewChild('t') public tooltip: NgbTooltip;

  @Input() placement = 'left';
  @Input() message = `Si desidera eliminare ?`;

  @Output() confirm = new EventEmitter<boolean>();

  private title = 'Attenzione';
  private confirmClicked = false;
  private cancelClicked = false;

  constructor(private ref: ChangeDetectorRef) { }

  private canceled(): void {
    this.tooltip.close();
    this.ref.markForCheck();
    this.confirm.emit(false);
  }

  private confirmed(): void {
    this.tooltip.close();
    this.ref.markForCheck();
    this.confirm.emit(true);
  }

}
