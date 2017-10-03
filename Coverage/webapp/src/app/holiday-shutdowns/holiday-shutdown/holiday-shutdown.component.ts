import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { HolidayShutdown } from '../../shared/dto/holiday-shutdown';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-holiday-shutdown',
  templateUrl: './holiday-shutdown.component.html'
})
export class HolidayShutdownComponent {

  @Input() item: HolidayShutdown;

  @Output() updateRequest: EventEmitter<void>;
  @Output() deleteRequest: EventEmitter<void>;

  constructor() {
    this.updateRequest = new EventEmitter<void>();
    this.deleteRequest = new EventEmitter<void>();
  }

  update(): void {
    this.updateRequest.emit();
  }

  delete(): void {
    this.deleteRequest.emit();
  }

}
