import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule, NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { UsedMaterialModule } from '../../shared/used-material.module';
import { EmployesService } from '../../service/employes.service';
import { Employe } from '../../shared/dto/employe';
import { inflexibilityPeriodListMock, areasMock } from '../../shared/tests-mocks/mocks';
import { EmployesComponent } from './employes.component';
import { EmployesModule } from '../employes.module';
import { EmployesDataSource } from '../employes-list/employes-list-datasource';
import { ConfirmationButtonModule } from '../../confirmation-button/confirmation-button.module';
import { ApplicationSharedData } from '../../shared/application-shared-data';
import { EmployeState, Profile } from '../../shared/enums';

let employeService: EmployesService;

const employes = <Employe[]>inflexibilityPeriodListMock[0].employes.concat(inflexibilityPeriodListMock[1].employes);
const loggedEmploye = JSON.parse(JSON.stringify(employes[0]));
const employe = new Employe();
loggedEmploye.id = 12;
loggedEmploye.name = 'name';
loggedEmploye.surname = 'surname';

const areas = areasMock;
employe.areaList = areas;

describe('EmployesComponent', () => {
  let component: EmployesComponent;
  let fixture: ComponentFixture<EmployesComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [EmployesService, ToastrService],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        ToastrModule.forRoot(),
        EmployesModule,
        ConfirmationButtonModule,
        UsedMaterialModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(EmployesComponent);
    component = fixture.componentInstance;
    employeService = fixture.debugElement.injector.get(EmployesService);

    const spyGetEmployes = spyOn(employeService, 'getEmployes').and.returnValue(Promise.resolve(employes));
    const spySaveEmploye = spyOn(employeService, 'saveEmploye').and.returnValue(Promise.resolve());
    const spyDeleteEmploye = spyOn(employeService, 'deleteEmploye').and.returnValue(Promise.resolve());
    const spyGetEmployesArea = spyOn(employeService, 'getAreas').and.returnValue(Promise.resolve(areas));
    fixture.detectChanges();

    component.employeModel = employe;
    employe.areaList = areas;
    component.areasAutocomplete.areas = areas;
    component.employesDataSource = new EmployesDataSource(employes);
    ApplicationSharedData.getInstance().loggedEmploye = loggedEmploye;
    fixture.detectChanges();
  });

  afterEach(function (done) {
    setTimeout(function () {
      done();
      ApplicationSharedData.getInstance().setEmpAutoCompInjectSearch(null);
    }, 30);
  });

  it('should be created', async () => {
    expect(component).toBeTruthy();
  });

  it('Trigger form validation.', async () => {
    component.employeForm.markAsTouched();
    fixture.detectChanges();
    expect(component.employeForm.invalid).toBe(true, 'Form validation should return true');
  });

  it('Trigger employe edit.', async () => {
    fixture.detectChanges();
    expect(function () {
      component['editEmploye'].call(component, employe);
    }).not.toThrow();
  });

  it('Trigger employe save.', async () => {
    fixture.detectChanges();
    expect(function () {
      component['saveEmploye'].call(component, employe);
    }).not.toThrow();
  });

  it('Trigger employe delete.', async () => {
    fixture.detectChanges();
    expect(function () {
      component['deleteEmploye'].call(component, employe);
    }).not.toThrow();
  });

  it('Select area.', async () => {
    fixture.detectChanges();
    component['selectedArea'].call(component, areas[0]);
    fixture.whenStable().then(() => {
      expect(component.employeModel.areaList[0].id).toBe(75);
    });
  });
});
