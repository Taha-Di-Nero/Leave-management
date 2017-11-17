import { FormControl } from '@angular/forms';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/startWith';

import { Employe } from '../shared/dto/employe';
import { EmployeState } from '../shared/enums';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-employe-autocomplete',
  templateUrl: './employe-autocomplete.component.html',
  styleUrls: ['./employe-autocomplete.component.css']
})
export class EmployeAutocompleteComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() employesSubject: Subject<Employe[]>;
  @Input() injectSearch: Subject<string>;
  @Input() placeholder = 'Ricerca dipendente';
  @Input() showLeaves = false;

  @Output() selected: EventEmitter<Employe> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();

  employesSubscription: Subscription;

  injectSearchSubscription: Subscription;

  employes: Employe[] = [];
  filteredEmployes: Observable<Employe[]>;

  employeCtrl: FormControl;
  employeStateColor = '';

  EmployeState = EmployeState;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.employesSubscription = this.employesSubject.filter(employes => !!employes).subscribe(
      employes => {
        this.employes.splice(0);
        employes.forEach(e => this.employes.push(e));
        if (!!this.employeCtrl) {
          this.employeCtrl.setValue('');
        }
        this.ref.markForCheck();
      }
    );

    this.employeCtrl = new FormControl();
    this.filteredEmployes = this.employeCtrl.valueChanges.startWith(null)
      .map(searchTerm => searchTerm ? this.filterEmployes(searchTerm) : this.employes.slice());
  }

  ngAfterViewInit(): void {
    this.injectSearchSubscription = this.injectSearch.filter(searchTerm => !!searchTerm)
      .subscribe(searchTerm => {
        this.employeCtrl.setValue(searchTerm);
        if (!!this.employeCtrl.value) {
          this.selectEmploye();
        }
      }
      );
  }

  private filterEmployes(searchTerm: string): Employe[] {
    return this.employes.filter(employe =>
      employe.surname.concat(' ', employe.name).toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0);
  }

  public getselectedEmploye(): Employe {
    const selectedEmploye = this.employeCtrl.value ? this.filterEmployes(this.employeCtrl.value) : [];
    if (selectedEmploye.length === 1) {
      this.employeCtrl.setValue(selectedEmploye[0].surname.concat(' ', selectedEmploye[0].name));
      return selectedEmploye[0];
    }
    return undefined;
  }

  selectEmploye(): void {
    const employe = this.getselectedEmploye();
    this.selected.emit(employe);
    switch (employe.state) {
      case EmployeState.Flexible:
        this.employeStateColor = 'flexible-text font-weight-bolder';
        break;
      case EmployeState.Inflexible:
        this.employeStateColor = 'inflexible-text font-weight-bolder';
        break;
      case EmployeState.Indifferent:
        this.employeStateColor = 'indifferent-text font-weight-bolder';
        break;
      default:
        this.employeStateColor = '';
    }
  }

  getStateClass(employe, baseClass: string): string {
    switch (employe.state) {
      case EmployeState.Inflexible:
        return `${baseClass} inflexible`;
      case EmployeState.Flexible:
        return `${baseClass} flexible`;
      case EmployeState.Indifferent:
        return `${baseClass} indifferent`;
    }
  }

  public resetSearch(): void {
    const selectedEmploye = this.getselectedEmploye();
    this.employeStateColor = '';
    this.employeCtrl.reset();
    if (selectedEmploye) {
      this.reset.emit(undefined);
    }
  }

  ngOnDestroy() {
    if (this.employesSubscription) {
      this.employesSubscription.unsubscribe();
    }
    if (this.injectSearchSubscription) {
      this.injectSearchSubscription.unsubscribe();
      this.injectSearch.next('');
    }
  }
}

