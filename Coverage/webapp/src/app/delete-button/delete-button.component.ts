import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styles: []
})
export class DeleteButtonComponent {

  @Input() placement = 'left';

  @Output() confirm = new EventEmitter<boolean>();

  private title = 'Attenzione';
  private message = 'Si desidera eliminare ?';
  private confirmClicked = false;
  private cancelClicked = false;

  constructor() { }

  private canceled(): void {
    this.confirm.emit(false);
  }

  private confirmed(): void {
    this.confirm.emit(true);
  }

}
