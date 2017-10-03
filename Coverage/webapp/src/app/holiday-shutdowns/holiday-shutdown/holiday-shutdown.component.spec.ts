import { HolidayShutdown } from '../../shared/dto/holiday-shutdown';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { UsedMaterialModule } from '../../shared/used-material.module';
import { HolidayShutdownComponent } from './holiday-shutdown.component';

describe('HolidayShutdownComponent', () => {
  let component: HolidayShutdownComponent;
  let fixture: ComponentFixture<HolidayShutdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        UsedMaterialModule,
      ],
      declarations: [HolidayShutdownComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayShutdownComponent);
    component = fixture.componentInstance;
    component.item = new HolidayShutdown();
    component.item.id = 1;
    component.item.from = new Date();
    component.item.to = new Date();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
