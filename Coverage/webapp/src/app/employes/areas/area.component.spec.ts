import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { EmployesService } from '../../service/employes.service';
import { AreaComponent } from './area.component';
import { UsedMaterialModule } from '../../shared/used-material.module';
import { EmployesModule } from '../employes.module';
import { areasMock } from '../../shared/tests-mocks/mocks';
import { Area } from '../../shared/dto/area';

let service: EmployesService;
const areas = areasMock;
const area = new Area();
area.id = 1;
area.description = 'addedArea';

describe('AreaComponent', () => {
  let component: AreaComponent;
  let fixture: ComponentFixture<AreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [EmployesService, ToastrService],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        ToastrModule.forRoot(),
        EmployesModule,
        UsedMaterialModule
      ]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AreaComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(EmployesService);

    const spyGetInflexibilityPeriodsMot = spyOn(service, 'getAreas')
      .and.returnValue(Promise.resolve(areas));

    const spyAddInflexibilityPeriodsMot = spyOn(service, 'addArea')
      .and.returnValue(Promise.resolve(area));

    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Filter and select Accentramento Contributivo', () => {
    component.selected.subscribe((a) => expect(a.id).toBe(75, 'Area not selected'));
    component.areaCtrl.setValue('Accent');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      component['selectArea'].call(component);
      fixture.detectChanges();
    });
  });

  it('Reset motivation control control', () => {
    component.areaCtrl.setValue('Accent');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      component['resetSearch'].call(component);
      fixture.detectChanges();
      expect(component.areaCtrl.value).toBe(null, 'areaCtrl not reseted');
    });
  });

  it('Add area', () => {
    component.selected.subscribe((a) => expect(a.id).toBe(1, 'area not saved'));
    component.areaCtrl.setValue('Added');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      component['addArea'].call(component, new MouseEvent('click'));
      fixture.detectChanges();
    });
  });
});
