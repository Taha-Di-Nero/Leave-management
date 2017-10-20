import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Employe } from '../../shared/dto/employe';
import { EmployeState } from '../../shared/enums';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent {

  @Input() item: Employe;

  @Output() updateRequest: EventEmitter<void>;
  @Output() deleteRequest: EventEmitter<void>;

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

  getTitleValue(areasNumber: number): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(` <span>Aree&nbsp;</span>
    <span class="badge rounded app-badge">${areasNumber}</span>`);
  }

}
