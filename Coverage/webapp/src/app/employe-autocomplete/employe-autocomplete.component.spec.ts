import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsedMaterialModule } from '../shared/used-material.module';

import { EmployeAutocompleteComponent } from './employe-autocomplete.component';
import { Employe } from '../shared/dto/employe';
import { EmployeState } from '../shared/enums';
import { CoverageService } from '../service/coverage.service';
import { EmployesFlexibility } from '../shared/dto/employes-flexibility';
import { ApplicationSharedData } from '../shared/application-shared-data';

const employef = new Employe();
employef.id = 1;
employef.name = 'FName1';
employef.surname = 'fSurname1';
employef.state = EmployeState.Flexible;
employef.currentYearLeaves = 1;

const employeInf = new Employe();
employeInf.id = 2;
employeInf.name = 'infName';
employeInf.surname = 'infSurname';
employeInf.state = EmployeState.Inflexible;
employeInf.currentYearLeaves = 2;

const employeInd = new Employe();
employeInd.id = 3;
employeInd.name = 'indName';
employeInd.surname = 'indSurname';
employeInd.state = EmployeState.Flexible;
employeInd.currentYearLeaves = 3;
const employess = [employef, employeInf, employeInd];

describe('EmployeAutocompleteComponent', () => {
  let component: EmployeAutocompleteComponent;
  let fixture: ComponentFixture<EmployeAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UsedMaterialModule
      ],
      declarations: [EmployeAutocompleteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeAutocompleteComponent);
    component = fixture.componentInstance;
    component.employesSubject = ApplicationSharedData.getInstance().getEmployes();
    component.injectSearch = ApplicationSharedData.getInstance().getEmpAutoCompInjectSearch();
    component.employesSubject.next(employess);
    fixture.detectChanges();
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Filter infSurname', () => {
    let filteredEmp: Employe[];
    let employeId: number;
    component.filteredEmployes.subscribe(e => {
      filteredEmp = e;
      employeId = filteredEmp[0].id;
    });
    component.employeCtrl.setValue('infS');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(filteredEmp.length).toBe(1, 'Filtered employes contains more elements than expected');
      expect(employeId).toBe(2, 'infSurname not filtered');
    });
  });

  it('Filter and select fSurname1', () => {
    component.selected.subscribe((emp) => expect(emp.id).toBe(1, 'fSurname1 not selected'));
    component.employeCtrl.setValue('name1');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      component['selectEmploye'].call(component);
      fixture.detectChanges();
    });
  });

  it('Reset control', () => {
    component.reset.subscribe((emp) => {
      expect(emp).toBe(undefined, 'reset event is defined should be undefined');
      expect(component.employeStateColor).toBe('', 'Sate color not reseted');
      expect(component.employeCtrl.value).toBe(null, 'employeCtrl not reseted');
    });
    component.employeCtrl.setValue('name1');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      component['resetSearch'].call(component);
      fixture.detectChanges();
    });
  });



  it('Update employes array from subscription', () => {
    fixture.detectChanges();
    const employes = [employef];
    ApplicationSharedData.getInstance().getEmployes().next(employes);
    fixture.whenStable().then(() => {
      expect(component.employes.length).toBe(1, 'Employes array not contains the right elts');
      expect(component.employes[0].id).toBe(1, 'Id is not expecte done.');
    });
  });
});
