import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts/release';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { FlexibilityPieComponent } from './flexibility-pie.component';
import { GroupMembersJoinPipe } from './group-members-join.pipe';

describe('FlexibilityPieComponent', () => {
  let component: FlexibilityPieComponent;
  let fixture: ComponentFixture<FlexibilityPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
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
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
