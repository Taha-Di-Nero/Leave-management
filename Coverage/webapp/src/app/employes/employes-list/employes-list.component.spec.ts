import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DomSanitizer } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsedMaterialModule } from '../../shared/used-material.module';
import { EmployesModule } from '../employes.module';
import { EmployesListComponent } from './employes-list.component';
import { Employe } from '../../shared/dto/employe';
import { EmployesDataSource } from './employes-list-datasource';
import { inflexibilityPeriodListMock } from '../../shared/tests-mocks/mocks';

const employes = <Employe[]>inflexibilityPeriodListMock[0].employes.concat(inflexibilityPeriodListMock[1].employes);

let sanitizer: DomSanitizer;

describe('EmployesListComponent', () => {
  let component: EmployesListComponent;
  let fixture: ComponentFixture<EmployesListComponent>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      providers: [DomSanitizer],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        NgbModule.forRoot(),
        EmployesModule,
        UsedMaterialModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(EmployesListComponent);
    component = fixture.componentInstance;
    sanitizer = fixture.debugElement.injector.get(DomSanitizer);

    fixture.detectChanges();
    component.employes = new EmployesDataSource(employes);
    fixture.detectChanges();
  });

  it('should be created', async () => {
    expect(component).toBeTruthy();
  });
});
