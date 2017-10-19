import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { YearsCoverageComponent } from './years-coverage.component';
import { ApplicationSharedData } from '../../shared/application-shared-data';
import { events } from '../../shared/tests-mocks/mocks';

describe('YearsCoverageComponent', () => {
  let component: YearsCoverageComponent;
  let fixture: ComponentFixture<YearsCoverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
      imports: [
        BrowserAnimationsModule,
        NgxChartsModule
      ],
      declarations: [ YearsCoverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearsCoverageComponent);
    component = fixture.componentInstance;
    fixture.componentInstance.yearsMonths = getYearMonths();
    fixture.detectChanges();
    ApplicationSharedData.getInstance().getYearsCoverage().next(events);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

function getYearMonths(): Date[] {
  const yearMonths: Date[] = new Array<Date>();
  for (let i = 0; i < 12; i++) {
    yearMonths.push(new Date(2017, i, 1));
  }
  return yearMonths;
}
