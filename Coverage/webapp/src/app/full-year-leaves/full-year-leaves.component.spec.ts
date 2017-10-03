import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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

const employe = new Employe();
employe.id = 12;
employe.name = 'name';
employe.surname = 'surname';
employe.profile = Profile.Normal;
employe.currentYearLeaves = 12;

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
        HttpModule,
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

  beforeEach(() => {
    fixture = TestBed.createComponent(FullYearLeavesComponent);
    component = fixture.componentInstance;

    coverageService = fixture.debugElement.injector.get(CoverageService);
    leaveService = fixture.debugElement.injector.get(LeaveService);

    ApplicationSharedData.getInstance().loggedEmploye = employe;
    const spyLeaves = spyOn(leaveService, 'getLeaves')
      .and.returnValue(Promise.resolve(new Array<FullDayLeave>()));

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Trigger day click.', () => {
    fixture.detectChanges();
    expect(function () {
      component['dayClicked'].call(component, new MouseEvent('click'), { date: new Date(2017, 7, 10) });
    }).not.toThrow();
  });
});
