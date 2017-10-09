import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { InflexibilityPeriod } from '../../shared/dto/inflexibility-period';
import { EmployeState } from '../../shared/enums';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-inflexibility-period',
  templateUrl: './inflexibility-period.component.html',
  styleUrls: ['./inflexibility-period.component.css']
})
export class InflexibilityPeriodComponent {

  @Input() item: InflexibilityPeriod;

  @Output() updateRequest: EventEmitter<void>;
  @Output() deleteRequest: EventEmitter<void>;

  EmployeState = EmployeState;

  constructor(private sanitizer: DomSanitizer) {
    this.updateRequest = new EventEmitter<void>();
    this.deleteRequest = new EventEmitter<void>();
  }

  update(): void {
    this.updateRequest.emit();
  }

  delete(): void {
    this.deleteRequest.emit();
  }

  getStateColor(employe): string {
    switch (employe.state) {
      case EmployeState.Inflexible:
        return 'inflexible-text font-weight-bolder';
      case EmployeState.Flexible:
        return 'flexible-text font-weight-bolder';
      case EmployeState.Indifferent:
        return 'indifferent-text font-weight-bolder';
    }
  }

  private getTitleValue(employesNumber: number): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml( ` <span>Dipendenti coinvolti&nbsp;</span>
    <span class="badge rounded app-badge">${employesNumber}</span>`);
  }

}
