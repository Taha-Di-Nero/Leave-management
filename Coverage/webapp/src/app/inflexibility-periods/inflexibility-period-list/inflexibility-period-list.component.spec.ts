import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule, NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { UsedMaterialModule } from '../../shared/used-material.module';
import { InflexibilityPeriodListComponent } from './inflexibility-period-list.component';
import { InflexibilityPeriodsModule } from '../inflexibility-periods.module';
import { InflexibilityPeriodsService } from '../../service/inflexibility-periods.service';
import { NgbDateITParserFormatter } from '../../shared/ngb-date-it-parser-formatter';
import { I18n, ItalianDatepickerI18n } from '../../shared/italianDatepickerI18n';
import { EmployeAutocompleteModule } from '../../employe-autocomplete/employe-autocomplete.module';
import { inflexibilityPeriodListMock } from '../../shared/tests-mocks/mocks';
import { Employe } from '../../shared/dto/employe';
import { ApplicationSharedData } from '../../shared/application-shared-data';

let inflexibilityPeriodsService: InflexibilityPeriodsService;
const inflexibilityPeriod = inflexibilityPeriodListMock[0];
const employes = <Employe[]>inflexibilityPeriodListMock[0].employes.concat(inflexibilityPeriodListMock[1].employes);

describe('InflexibilityPeriodListComponent', () => {
  let component: InflexibilityPeriodListComponent;
  let fixture: ComponentFixture<InflexibilityPeriodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ToastrService,
        InflexibilityPeriodsService,
        { provide: NgbDateParserFormatter, useClass: NgbDateITParserFormatter },
        I18n,
        { provide: NgbDatepickerI18n, useClass: ItalianDatepickerI18n }
      ],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        ToastrModule.forRoot(),
        EmployeAutocompleteModule,
        InflexibilityPeriodsModule,
        UsedMaterialModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(InflexibilityPeriodListComponent);
    component = fixture.componentInstance;
    inflexibilityPeriodsService = fixture.debugElement.injector.get(InflexibilityPeriodsService);

    const spyGetInflexibilityPeriods = spyOn(inflexibilityPeriodsService, 'getInflexibilityPeriods')
      .and.returnValue(Promise.resolve(inflexibilityPeriodListMock));
    const spySaveInflexibilityPeriod = spyOn(inflexibilityPeriodsService, 'saveInflexibilityPeriod')
      .and.returnValue(Promise.resolve(inflexibilityPeriod));
    const spyDeleteInflexibilityPeriod = spyOn(inflexibilityPeriodsService, 'deleteInflexibilityPeriod')
      .and.returnValue(Promise.resolve(inflexibilityPeriod));
    const spyGetInflexibilityPeriodsMot = spyOn(inflexibilityPeriodsService, 'getMotivations')
      .and.returnValue(Promise.resolve([inflexibilityPeriod.inflexibilityPeriodMotivation]));
    fixture.detectChanges();
    component.employeAutocomplete.employesSubject.next(employes);
    fixture.detectChanges();
  });

  it('should be created', async () => {
    expect(component).toBeTruthy();
  });

  it('Trigger form validation.', () => {
    component.inflexibilityPeriodForm.markAsTouched();
    fixture.detectChanges();
    const response = component['isFormInvalid'].call(component);
    fixture.detectChanges();
    expect(response).toBe(true, 'Form validation should return true');
    expect(component.inflexibilityPeriodForm.errors.arrayEmpty).toBe(true, 'Form validation should generate array empty error');
    expect(component.inflexibilityPeriodForm.errors.motivationEmpty).toBe(true, 'Form validation should generate motivationEmpty error');
  });

  it('Trigger inflexibilityPeriod edit.', () => {
    fixture.detectChanges();
    expect(function () {
      component['editInflexibilityPeriod'].call(component, inflexibilityPeriod);
    }).not.toThrow();
  });

  it('Trigger inflexibilityPeriod save.', () => {
    fixture.detectChanges();
    expect(function () {
      component['saveInflexibilityPeriod'].call(component, inflexibilityPeriod);
    }).not.toThrow();
  });

  it('Trigger inflexibilityPeriod delete.', () => {
    fixture.detectChanges();
    expect(function () {
      component['deleteInflexibilityPeriod'].call(component, inflexibilityPeriod);
    }).not.toThrow();
  });

  it('Select employe.', () => {
    component.employeAutocomplete.employeCtrl.setValue('name');
    fixture.detectChanges();
    component['selectedEmploye'].call(component, employes[0]);
    fixture.whenStable().then(() => {
      expect(component.inflexibilityPeriodModel.employes.length).toBe(1);
    });
  });

  it('Select motivation.', () => {
    component.motivationAutocomplete.motivationCtrl.setValue('R');
    fixture.detectChanges();
    component['selectedMotivation'].call(component, inflexibilityPeriod.inflexibilityPeriodMotivation);
    fixture.whenStable().then(() => {
      expect(component.inflexibilityPeriodModel.inflexibilityPeriodMotivation.description).toBe('Rilascio');
    });
  });

  it('Reset motivation.', () => {
    component.motivationAutocomplete.motivationCtrl.setValue('R');
    fixture.detectChanges();
    component['resetMotivation'].call(component);
    fixture.whenStable().then(() => {
      expect(component.inflexibilityPeriodModel.inflexibilityPeriodMotivation).toBe(undefined);
    });
  });
});
