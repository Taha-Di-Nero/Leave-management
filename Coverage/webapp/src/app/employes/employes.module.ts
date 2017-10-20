import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsedMaterialModule } from '../shared/used-material.module';
import { EmployeComponent } from './employe/employe.component';
import { AreaComponent } from './areas/area.component';
import { EmployeListComponent } from './employes-list/employes-list.component';
import { EmployesService } from '../service/employes.service';

@NgModule({
  providers: [
    EmployesService
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    UsedMaterialModule
  ],
  declarations: [
    AreaComponent,
    EmployeComponent,
    EmployeListComponent
  ],
  exports: [
    AreaComponent,
    EmployeComponent,
    EmployeListComponent
  ]
})
export class EmployesModule { }
