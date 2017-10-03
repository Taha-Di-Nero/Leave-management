import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UsedMaterialModule } from '../../shared/used-material.module';
import { InflexibilityPeriodComponent } from './inflexibility-period.component';
import { Employe } from '../../shared/dto/employe';
import { InflexibilityPeriod } from '../../shared/dto/inflexibility-period';

describe('InflexibilityPeriodComponent', () => {
  let component: InflexibilityPeriodComponent;
  let fixture: ComponentFixture<InflexibilityPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        UsedMaterialModule,
      ],
      declarations: [InflexibilityPeriodComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InflexibilityPeriodComponent);
    component = fixture.componentInstance;
    component.item = new InflexibilityPeriod();
    component.item.id = 1;
    component.item.from = new Date();
    component.item.to = new Date();
    component.item.inflexibilityPeriodMotivation = {
      'id': 1,
      'description': 'Rilascio'
    };
    component.item.employes = [new Employe()];
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
