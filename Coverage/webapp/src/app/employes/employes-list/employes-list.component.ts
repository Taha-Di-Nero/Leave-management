import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Employe } from '../../shared/dto/employe';
import { EmployeState } from '../../shared/enums';
import { EmployesDataSource } from '../employes-manager/employes-list-datasource';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})
export class EmployesListComponent {

  @Input() employes: EmployesDataSource;

  @Output() updateRequest: EventEmitter<Employe>;
  @Output() deleteRequest: EventEmitter<Employe>;

  displayedColumns = ['employeFullName', 'email', 'areas', 'actions'];

  constructor(private sanitizer: DomSanitizer) {
    this.updateRequest = new EventEmitter<Employe>();
    this.deleteRequest = new EventEmitter<Employe>();
  }

  update(employe: Employe): void {
    this.updateRequest.emit(employe);
  }

  delete(employe: Employe): void {
    this.deleteRequest.emit(employe);
  }

  getTitleValue(areasNumber: number): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(` <span>Aree&nbsp;</span>
    <span class="badge rounded app-badge">${areasNumber}</span>`);
  }

}
