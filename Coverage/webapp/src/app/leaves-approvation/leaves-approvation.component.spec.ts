import { EmployeLeaves } from '../shared/dto/employe-leaves';
import { UpdatePlanResponse } from '../shared/dto/update-plan-response';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrService, ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsedMaterialModule } from '../shared/used-material.module';
import { LeavesApprovationComponent } from './leaves-approvation.component';
import { LeaveService } from '../service/leave.service';
import { FullDayLeave } from '../shared/dto/leave';
import { ConfirmationButtonModule } from '../confirmation-button/confirmation-button.module';

const leaves = [{ id: 1, date: new Date(2017, 10, 4), state: 1 }, { id: 1, date: new Date(2017, 10, 5), state: 2 }];
const employeLeaves = new EmployeLeaves(1, 'full name');
employeLeaves.leaves = leaves as FullDayLeave[];

let leaveService: LeaveService;
let toastrService: ToastrService;

describe('LeavesApprovationComponent', () => {
  let component: LeavesApprovationComponent;
  let fixture: ComponentFixture<LeavesApprovationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [LeaveService, ToastrService, { provide: APP_BASE_HREF, useValue: '/' }],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        NgbModule.forRoot(),
        ConfirmationButtonModule,
        UsedMaterialModule,
      ],
      declarations: [LeavesApprovationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesApprovationComponent);
    component = fixture.componentInstance;

    toastrService = fixture.debugElement.injector.get(ToastrService);
    leaveService = fixture.debugElement.injector.get(LeaveService);

    const spyGetLeaves = spyOn(leaveService, 'getLeavesByState').and.returnValue(Promise.resolve(leaves));
    const spyUpdateLeaves = spyOn(leaveService, 'updateLeavesPlan')
      .and.returnValue(Promise.resolve(new UpdatePlanResponse(['01/08/1983'], ['26/01/2006'], ['02/03/2016'])));

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Trigger approvation.', () => {
    fixture.detectChanges();
    expect(function () {
      component['approve'].call(component, true, employeLeaves);
    }).not.toThrow();
  });

  it('Trigger rejection.', () => {
    fixture.detectChanges();
    expect(function () {
      component['reject'].call(component, true, employeLeaves);
    }).not.toThrow();
  });
});
