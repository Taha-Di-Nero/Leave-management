import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By, DomSanitizer } from '@angular/platform-browser';
import { SimpleChange, SimpleChanges, NO_ERRORS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MatIconRegistry, MatIconModule } from '@angular/material';

import { NavItemComponent } from './nav-item.component';
import { NavigationNode } from '../nav-menu/nav-menu.model';

describe('NavItemComponent', () => {

  let component: NavItemComponent;
  let fixture: ComponentFixture<NavItemComponent>;
  let iconRegistry: MatIconRegistry;
  let sanitizer: DomSanitizer;


  describe('(via TestBed)', () => {

    beforeEach(async () => {
      TestBed.configureTestingModule({
        providers: [MatIconRegistry, DomSanitizer, { provide: APP_BASE_HREF, useValue: '/' }],
        imports: [HttpModule, MatIconModule],
        declarations: [NavItemComponent],
        schemas: [NO_ERRORS_SCHEMA]
      });
      TestBed.compileComponents();
    });

    beforeEach(async () => {

      fixture = TestBed.createComponent(NavItemComponent);
      component = fixture.componentInstance;
      iconRegistry = fixture.debugElement.injector.get(MatIconRegistry);
      sanitizer = fixture.debugElement.injector.get(DomSanitizer);

      const spyIconRegistry = spyOn(iconRegistry, 'addSvgIcon').and.callThrough();
    });

    it('should not show the hidden child nav-item', () => {
      component.node = {
        title: 'x',
        children: [
          { title: 'a' },
          { title: 'b', hidden: true },
          { title: 'c' }
        ]
      };
      component.ngOnChanges();
      const children = component.nodeChildren;
      expect(children.length).toEqual(2);
    });
  });
});
