import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmationButtonComponent } from './confirmation-button.component';
import { UsedMaterialModule } from '../shared/used-material.module';
import { ConfirmationButtonModule } from './confirmation-button.module';

describe('ConfirmationButtonComponent', () => {
  let component: ConfirmationButtonComponent;
  let fixture: ComponentFixture<ConfirmationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ConfirmationPopoverModule.forRoot({
          confirmButtonType: 'danger',
          confirmText: 'Elimina',
          cancelText: 'Annulla'
        }),
        NgbModule.forRoot(),
        ConfirmationButtonModule,
        UsedMaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Trigger cancel click.', () => {
    fixture.detectChanges();
    expect(function () {
      component['canceled'].call(component);
    }).not.toThrow();
  });

  it('Trigger confirm click.', () => {
    fixture.detectChanges();
    expect(function () {
      component['confirmed'].call(component);
    }).not.toThrow();
  });
});
