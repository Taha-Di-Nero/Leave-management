import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts/release';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { FlexibilityPieComponent } from './flexibility-pie.component';
import { GroupMembersJoinPipe } from './group-members-join.pipe';
import { Employe } from '../../shared/dto/employe';
import { EmployeState } from '../../shared/enums';
import { ApplicationSharedData } from '../../shared/application-shared-data';
import { EmployesFlexibility } from '../../shared/dto/employes-flexibility';

const employef = new Employe();
employef.id = 1;
employef.name = 'FName1';
employef.surname = 'fSurname1';
employef.state = EmployeState.Flexible;
employef.currentYearLeaves = 1;

const employeInf = new Employe();
employeInf.id = 2;
employeInf.name = 'InfName';
employeInf.surname = 'InfSurname';
employeInf.state = EmployeState.Inflexible;
employeInf.currentYearLeaves = 2;

const employeInd = new Employe();
employeInd.id = 3;
employeInd.name = 'indName';
employeInd.surname = 'indSurname';
employeInd.state = EmployeState.Flexible;
employeInd.currentYearLeaves = 3;

describe('FlexibilityPieComponent', () => {
  let component: FlexibilityPieComponent;
  let fixture: ComponentFixture<FlexibilityPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgxChartsModule,
        NgbModalModule.forRoot()
      ],
      declarations: [
        FlexibilityPieComponent,
        GroupMembersJoinPipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexibilityPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    ApplicationSharedData.getInstance().getEmployesFlexibility().next(new EmployesFlexibility({ 'flexible': [employef, employeInd], 'inflexible': [employeInf], 'indifferent': [] }));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Trigger select pie flexible slice.', () => {
    fixture.detectChanges();
    expect(function () {
      component['onSelect'].call(component, { name: 'Flessibili' });
    }).not.toThrow();
  });

  it('Trigger select pie inflexible slice.', () => {
    fixture.detectChanges();
    expect(function () {
      component['onSelect'].call(component, { name: 'Inflessibili' });
    }).not.toThrow();
  });

  it('GroupMembersJoinPipe transform.', () => {
    const pipe = new GroupMembersJoinPipe();
    expect(pipe.transform([employef, employeInf])).toBe('F. fSurname1, I. InfSurname', 'Wrong transformation.');
  });
});
