import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UsedMaterialModule } from '../shared/used-material.module';
import { LeavesApprovationComponent } from './leaves-approvation.component';

describe('LeavesApprovationComponent', () => {
  let component: LeavesApprovationComponent;
  let fixture: ComponentFixture<LeavesApprovationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        UsedMaterialModule,
      ],
      declarations: [LeavesApprovationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesApprovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
