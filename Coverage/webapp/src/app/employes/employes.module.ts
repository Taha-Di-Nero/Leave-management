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
import { ConfirmationButtonModule } from '../confirmation-button/confirmation-button.module';

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
    ConfirmationButtonModule,
    UsedMaterialModule
  ],
  declarations: [
    EmployesComponent,
    EmployesListComponent,
    AreaComponent
  ],
  exports: [
    EmployesComponent,
    EmployesListComponent,
    AreaComponent
  ]
})
export class EmployesModule { }
