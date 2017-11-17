import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime } from 'rxjs/operators';
import 'rxjs/add/operator/distinctUntilChanged';


import { Employe } from '../../shared/dto/employe';
import { EmployeState } from '../../shared/enums';
import { EmployesDataSource } from './employes-list-datasource';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})
export class EmployesListComponent implements OnInit, OnDestroy {

  searchSubscription: Subscription;

  @ViewChild('filter') filter: ElementRef;

  @Input() employes: EmployesDataSource;

  @Output() updateRequest: EventEmitter<Employe>;
  @Output() deleteRequest: EventEmitter<Employe>;

  displayedColumns = ['employeFullName', 'email', 'areas', 'actions'];

  constructor(private sanitizer: DomSanitizer) {
    this.updateRequest = new EventEmitter<Employe>();
    this.deleteRequest = new EventEmitter<Employe>();
  }
  ngOnInit() {
    this.searchSubscription = Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150).distinctUntilChanged()
      .subscribe(() => {
        if (!this.employes) { return; }
        this.employes.filter = this.filter.nativeElement.value;
      });
  }
  update(employe: Employe): void {
    this.updateRequest.emit(employe);
  }

  delete(confirm: boolean, employe: Employe): void {
    if (confirm) {
      this.deleteRequest.emit(employe);
    }
  }

  getTitleValue(areasNumber: number): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(` <span>Aree&nbsp;</span>
    <span class="badge rounded app-badge">${areasNumber}</span>`);
  }
  resetSearch(): void {
    this.employes.filter = this.filter.nativeElement.value = '';
  }

  getdeleteMsg(employe: Employe): string {
    return 'Si desidera eliminare '.concat(employe.surname, ' ', employe.name, '?');
  }

  ngOnDestroy() {
    if (!!this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
}
