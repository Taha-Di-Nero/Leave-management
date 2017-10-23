import { InflexibilityPeriodMotivation } from '../../shared/dto/inflexibility-period-motivation';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { InflexibilityPeriodMotivationComponent } from './inflexibility-period-motivation.component';
import { UsedMaterialModule } from '../../shared/used-material.module';
import { InflexibilityPeriodsService } from '../../service/inflexibility-periods.service';
import { inflexibilityPeriodListMock } from '../../shared/tests-mocks/mocks';

let service: InflexibilityPeriodsService;
const inflexibilityPeriods = inflexibilityPeriodListMock;

describe('InflexibilityPeriodMotivationComponent', () => {
  let component: InflexibilityPeriodMotivationComponent;
  let fixture: ComponentFixture<InflexibilityPeriodMotivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [InflexibilityPeriodsService, ToastrService],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        ToastrModule.forRoot(),
        UsedMaterialModule
      ],
      declarations: [InflexibilityPeriodMotivationComponent]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InflexibilityPeriodMotivationComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(InflexibilityPeriodsService);

    const spyGetInflexibilityPeriodsMot = spyOn(service, 'getMotivations')
      .and.returnValue(Promise.resolve([inflexibilityPeriods[0].inflexibilityPeriodMotivation, inflexibilityPeriods[1].inflexibilityPeriodMotivation]));

    const spyAddInflexibilityPeriodsMot = spyOn(service, 'addMotivation')
      .and.returnValue(Promise.resolve(inflexibilityPeriods[0].inflexibilityPeriodMotivation));

    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Filter and select Aggiornamento', () => {
    component.selected.subscribe((mot) => expect(mot.id).toBe(2, 'Aggiornamento not selected'));
    component.motivationCtrl.setValue('Agg');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      component['selectMotivation'].call(component);
      fixture.detectChanges();
    });
  });

  it('Reset motivation control control', () => {
    component.reset.subscribe((mot) => {
      expect(component.motivationCtrl.value).toBe(null, 'motivationCtrl not reseted');
    });
    component.motivationCtrl.setValue('Rila');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      component['resetSearch'].call(component);
      fixture.detectChanges();
    });
  });

  it('Add motivation', () => {
    component.selected.subscribe((mot) => expect(mot.id).toBe(1, 'motivation not saved'));
    component.motivationCtrl.setValue('Added');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      component['addMotivation'].call(component, new MouseEvent('click'));
      fixture.detectChanges();
    });
  });
});
