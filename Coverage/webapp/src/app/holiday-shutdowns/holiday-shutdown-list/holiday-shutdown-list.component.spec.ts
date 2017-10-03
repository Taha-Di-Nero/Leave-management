import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

import { UsedMaterialModule } from '../../shared/used-material.module';
import { HolidayShutdownListComponent } from './holiday-shutdown-list.component';
import { HolidayShutdownModule } from '../holiday-shutdown/holiday-shutdown.module';
import { HolidayShutdownsService } from '../../service/holiday-shutdowns.service';
import { NgbDateFRParserFormatter } from '../../shared/ngb-date-fr-parser-formatter';
import { I18n, ItalianDatepickerI18n } from '../../shared/italianDatepickerI18n';
import { holidayShutdownsmocks } from '../../shared/tests-mocks/mocks';
import { HolidayShutdown } from '../../shared/dto/holiday-shutdown';

let holidayShutdownsService: HolidayShutdownsService;
const holidayShutdown = holidayShutdownsmocks[0];


describe('HolidayShutdownListComponent', () => {
  let component: HolidayShutdownListComponent;
  let fixture: ComponentFixture<HolidayShutdownListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [HolidayShutdownsService],
      imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        HolidayShutdownModule,
        UsedMaterialModule,
      ],
      declarations: [HolidayShutdownListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayShutdownListComponent);
    component = fixture.componentInstance;
    holidayShutdownsService = fixture.debugElement.injector.get(HolidayShutdownsService);

    const spyGetHolidayShutdowns = spyOn(holidayShutdownsService, 'getHolidayShutdowns')
      .and.returnValue(Promise.resolve(holidayShutdownsmocks));
    const spySaveHolidayShutdown = spyOn(holidayShutdownsService, 'saveHolidayShutdown')
    .and.returnValue(Promise.resolve(holidayShutdown));
    const spyDeleteHolidayShutdown = spyOn(holidayShutdownsService, 'deleteHolidayShutdown')
    .and.returnValue(Promise.resolve(holidayShutdown));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Trigger holidayShutdown edit.', () => {
    fixture.detectChanges();
    expect(function () {
      component['editHolidayShutdown'].call(component, holidayShutdown);
    }).not.toThrow();
  });

  it('Trigger holidayShutdown save.', () => {
    fixture.detectChanges();
    expect(function () {
      component['saveHolidayShutdown'].call(component, holidayShutdown);
    }).not.toThrow();
  });

  it('Trigger holidayShutdown delete.', () => {
    fixture.detectChanges();
    expect(function () {
      component['deleteHolidayShutdown'].call(component, holidayShutdown);
    }).not.toThrow();
  });
});