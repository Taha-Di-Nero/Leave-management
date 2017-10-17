import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ToastrService } from 'ngx-toastr';

import { InflexibilityPeriodMotivation } from '../../shared/dto/inflexibility-period-motivation';
import { InflexibilityPeriodsService } from '../../service/inflexibility-periods.service';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-inflexibility-period-motivation',
  templateUrl: './inflexibility-period-motivation.component.html',
  styleUrls: ['./inflexibility-period-motivation.component.css']
})
export class InflexibilityPeriodMotivationComponent implements OnInit {

  @Input() placeholder = 'Ricerca motivo';
  @Input() editMotivation: InflexibilityPeriodMotivation;

  @Output() selected: EventEmitter<InflexibilityPeriodMotivation> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter<void>();

  motivations: InflexibilityPeriodMotivation[] = [];
  filteredMotivations: Observable<InflexibilityPeriodMotivation[]>;

  motivationCtrl: FormControl;

  private tostPos = { positionClass: 'toast-top-center' };

  constructor(private service: InflexibilityPeriodsService, private toastr: ToastrService, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.updateControl();
    this.initialize();
  }

  private filterMotivations(searchTerm: string): InflexibilityPeriodMotivation[] {
    return this.motivations.filter(motivation =>
      motivation.description.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0);
  }

  public getselectedMotivation(): InflexibilityPeriodMotivation {
    const selectedMotivation = this.motivationCtrl.value ? this.filterMotivations(this.motivationCtrl.value) : [];
    if (selectedMotivation.length === 1) {
      this.motivationCtrl.setValue(selectedMotivation[0].description);
      return selectedMotivation[0];
    }
    return undefined;
  }

  selectMotivation(): void {
    const motivation = this.getselectedMotivation();
    this.selected.emit(motivation);
  }

  addMotivation(event: MouseEvent): void {
    if (!!this.motivationCtrl.value) {
      const newMotivation = new InflexibilityPeriodMotivation();
      newMotivation.description = this.motivationCtrl.value;
      this.service.addMotivation(newMotivation).then(motivation => {
        this.selected.emit(motivation);
        this.updateControl();
      }).catch(err => this.toastr.error('Errore Generico!', '', this.tostPos));
    }
    event.preventDefault();
  }

  deleteMotivation(): void {
    const selectedMotivation = this.getselectedMotivation();
    if (!!selectedMotivation) {
      this.service.deleteMotivation(selectedMotivation.id).then(resp => {
        this.resetSearch();
        this.updateControl();
      }).catch(err => this.toastr.error('Motivo già legato ad un periodo', '', this.tostPos));
    }
  }

  public resetSearch(): void {
    const selectedMotivation = this.getselectedMotivation();
    this.motivationCtrl.reset();
    this.editMotivation = undefined;
    if (selectedMotivation) {
      this.reset.emit();
    }
  }

  private updateControl(): void {
    this.service.getMotivations().then(motivations => {
      this.motivations = motivations;
      this.motivationCtrl.reset();
      if (this.editMotivation) {
        this.motivationCtrl.setValue(this.editMotivation.description);
      }
      this.ref.markForCheck();
    });
  }

  private initialize(): void {
    this.motivationCtrl = new FormControl();
    this.filteredMotivations = this.motivationCtrl.valueChanges.startWith(null)
      .map(searchTerm => searchTerm ? this.filterMotivations(searchTerm) : this.motivations.slice());
    if (this.editMotivation) {
      this.motivationCtrl.setValue(this.editMotivation.description);
    }
  }
}

