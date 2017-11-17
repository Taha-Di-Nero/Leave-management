import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CalendarModule } from 'angular-calendar';
import { BlockUIModule } from 'ng-block-ui';

import { FullYearLeavesComponent } from './full-year-leaves.component';
import { UsedMaterialModule } from '../shared/used-material.module';
import { EmployeAutocompleteModule } from '../employe-autocomplete/employe-autocomplete.module';
import { CoverageService } from '../service/coverage.service';
import { LeaveService } from '../service/leave.service';
import { FullDayLeave } from '../shared/dto/leave';
import { Employe } from '../shared/dto/employe';
import { Profile } from '../shared/enums';
import { ApplicationSharedData } from '../shared/application-shared-data';
import { UpdatePlanResponse } from '../shared/dto/update-plan-response';

const employe = new Employe();
employe.id = 12;
employe.name = 'name';
employe.surname = 'surname';
employe.profile = Profile.Normal;
employe.currentYearLeaves = 12;

const leaves = [{ id: 1, date: new Date(2017, 10, 3), state: 0 },
{ id: 1, date: new Date(2017, 10, 4), state: 1 },
{ id: 1, date: new Date(2017, 10, 5), state: 2 }];

let coverageService: CoverageService;
let leaveService: LeaveService;

describe('FullYearLeavesComponent', () => {
  let component: FullYearLeavesComponent;
  let fixture: ComponentFixture<FullYearLeavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [LeaveService, CoverageService, ToastrService, { provide: APP_BASE_HREF, useValue: '/' }],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        CalendarModule.forRoot(),
        NgbModule.forRoot(),
        BlockUIModule,
        UsedMaterialModule,
        EmployeAutocompleteModule
      ],
      declarations: [FullYearLeavesComponent]
    })
      .compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(FullYearLeavesComponent);
    component = fixture.componentInstance;

    coverageService = fixture.debugElement.injector.get(CoverageService);
    leaveService = fixture.debugElement.injector.get(LeaveService);

    ApplicationSharedData.getInstance().loggedEmploye = employe;
    ApplicationSharedData.getInstance().currentYear = 2017;
    const spyLeaves = spyOn(leaveService, 'getLeaves').and.returnValue(Promise.resolve(leaves));
    const spyYearsLeaves = spyOn(leaveService, 'getYearLeaves').and.returnValue(Promise.resolve(leaves)); const spyUpdateLeaves = spyOn(leaveService, 'updateLeavesPlan')
    .and.returnValue(Promise.resolve(new UpdatePlanResponse(['01/08/1983'], ['26/01/2006'], ['02/03/2016'])));

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Trigger day click.', () => {
    fixture.detectChanges();
    expect(function () {
      component['dayClicked'].call(component, new MouseEvent('click'), { date: new Date(2017, 10, 10), inMonth: true });
    }).not.toThrow();
  });
});
