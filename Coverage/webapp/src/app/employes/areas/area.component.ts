import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ToastrService } from 'ngx-toastr';

import { Area } from '../../shared/dto/area';
import { EmployesService } from '../../service/employes.service';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  @Input() placeholder = 'Ricerca area';
  @Input() editArea: Area;

  @Output() selected: EventEmitter<Area> = new EventEmitter();
  @Output() delete: EventEmitter<Area> = new EventEmitter<Area>();

  areas: Area[] = [];
  filteredAreas: Observable<Area[]>;

  areaCtrl: FormControl;

  private tostPos = { positionClass: 'toast-top-center' };

  constructor(private service: EmployesService, private toastr: ToastrService, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.updateControl();
    this.initialize();
  }

  private filterAreas(searchTerm: string): Area[] {
    return this.areas.filter(area =>
      area.description.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0);
  }

  public getselectedArea(): Area {
    const selectedArea = this.areaCtrl.value ? this.filterAreas(this.areaCtrl.value) : [];
    if (selectedArea.length === 1) {
      this.areaCtrl.setValue(selectedArea[0].description);
      return selectedArea[0];
    }
    return undefined;
  }

  selectArea(): void {
    const area = this.getselectedArea();
    this.selected.emit(area);
  }

  addArea(event: MouseEvent): void {
    const selectedArea = this.getselectedArea();
    const selectedAreaDesc = !!selectedArea ? selectedArea.description : '';
    if (!!this.areaCtrl.value && this.areaCtrl.value !== selectedAreaDesc) {
      const newArea = new Area();
      newArea.description = this.areaCtrl.value;
      this.service.addArea(newArea).then(area => {
        this.selected.emit(area);
        this.updateControl();
      }).catch(err => this.toastr.error('Errore Generico!', '', this.tostPos));
    }
    event.preventDefault();
  }

  deleteArea(): void {
    const selectedArea = this.getselectedArea();
    if (!!selectedArea) {
      this.service.deleteArea(selectedArea.id).then(resp => {
        this.resetSearch();
        this.updateControl();
        this.delete.emit(selectedArea);
      }).catch(err => this.toastr.error('Area già legata ad un dipendente', '', this.tostPos));
    }
  }

  public resetSearch(): void {
    this.areaCtrl.reset();
    this.editArea = undefined;
  }

  private updateControl(): void {
    this.service.getAreas().then(areas => {
      this.areas = areas;
      this.areaCtrl.reset();
      if (this.editArea) {
        this.areaCtrl.setValue(this.editArea.description);
      }
      this.ref.markForCheck();
    });
  }

  private initialize(): void {
    this.areaCtrl = new FormControl();
    this.filteredAreas = this.areaCtrl.valueChanges.startWith(null)
      .map(searchTerm => searchTerm ? this.filterAreas(searchTerm) : this.areas.slice());
    if (this.editArea) {
      this.areaCtrl.setValue(this.editArea.description);
    }
  }
}

