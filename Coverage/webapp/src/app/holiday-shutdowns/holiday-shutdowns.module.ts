import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/Common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

import { UsedMaterialModule } from '../shared/used-material.module';
import { HolidayShutdownListComponent } from './holiday-shutdown-list/holiday-shutdown-list.component';
import { HolidayShutdownComponent } from './holiday-shutdown/holiday-shutdown.component';
import { HolidayShutdownsService } from '../service/holiday-shutdowns.service';
import { NgbDateITParserFormatter } from '../shared/ngb-date-it-parser-formatter';
import { I18n, ItalianDatepickerI18n } from '../shared/italianDatepickerI18n';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    UsedMaterialModule,
  ],
  declarations: [
    HolidayShutdownListComponent,
    HolidayShutdownComponent
  ],
  exports: [
    HolidayShutdownListComponent,
    HolidayShutdownComponent
  ],
  providers: [HolidayShutdownsService,
    {provide: NgbDateParserFormatter, useClass: NgbDateITParserFormatter},
    I18n,
    {provide: NgbDatepickerI18n, useClass: ItalianDatepickerI18n}
  ],
})
export class HolidayShutdownsModule { }
