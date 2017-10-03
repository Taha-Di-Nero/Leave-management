import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule, APP_BASE_HREF } from '@angular/common';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FabComponent } from './fab.component';
import { UsedMaterialModule } from '../shared/used-material.module';

describe('FabComponent', () => {
  let component: FabComponent;
  let fixture: ComponentFixture<FabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
      imports: [
        CommonModule,
        UsedMaterialModule,
        NgbModule.forRoot()
      ],
      declarations: [ FabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
