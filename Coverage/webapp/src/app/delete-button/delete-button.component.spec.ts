import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DeleteButtonComponent } from './delete-button.component';
import { UsedMaterialModule } from '../shared/used-material.module';
import { DeleteButtonModule } from './delete-button.module';

describe('DeleteButtonComponent', () => {
  let component: DeleteButtonComponent;
  let fixture: ComponentFixture<DeleteButtonComponent>;

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
        DeleteButtonModule,
        UsedMaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteButtonComponent);
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
