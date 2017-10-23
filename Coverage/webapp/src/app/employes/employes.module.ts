import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsedMaterialModule } from '../shared/used-material.module';
import { AreaComponent } from './areas/area.component';
import { EmployesService } from '../service/employes.service';
import { EmployesComponent } from './employes-manager/employes.component';
import { EmployesListComponent } from './employes-list/employes-list.component';

@NgModule({
  providers: [
    EmployesService
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    UsedMaterialModule
  ],
  declarations: [
    AreaComponent,
    EmployesComponent,
    EmployesListComponent
  ],
  exports: [
    AreaComponent,
    EmployesComponent,
    EmployesListComponent
  ]
})
export class EmployesModule { }