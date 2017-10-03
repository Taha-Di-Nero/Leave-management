import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Employe } from '../shared/dto/employe';
import { EmployeState } from '../shared/enums';
import { ApplicationSharedData } from '../shared/application-shared-data';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-employe-autocomplete',
  templateUrl: './employe-autocomplete.component.html',
  styleUrls: ['./employe-autocomplete.component.css']
})
export class EmployeAutocompleteComponent implements OnInit, OnDestroy {

  @Input() placeholder = 'Ricerca dipendente';
  @Input() showLeaves = false;

  @Output() selected: EventEmitter<Employe> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();

  employeFlexibilitySubscription: Subscription;

  employes: Employe[] = [];
  filteredEmployes: Observable<Employe[]>;

  employeCtrl: FormControl;
  employeStateColor = '';

  EmployeState = EmployeState;

  constructor(private ref: ChangeDetectorRef) {
    this.employeFlexibilitySubscription = ApplicationSharedData.getInstance().getEmployesFlexibility().filter(flex => !!flex).subscribe(
      flex => {
        this.employes.splice(0);
        flex.getAll().forEach(e => this.employes.push(e));
        if (this.employeCtrl) {
          this.employeCtrl.setValue('');
        }
        this.ref.markForCheck();
      }
    );
  }

  ngOnInit() {
    this.employeCtrl = new FormControl();
    this.filteredEmployes = this.employeCtrl.valueChanges.startWith(null)
      .map(searchTerm => searchTerm ? this.filterEmployes(searchTerm) : this.employes.slice());
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
    if (this.employeFlexibilitySubscription) {
      this.employeFlexibilitySubscription.unsubscribe();
    }
  }
}

