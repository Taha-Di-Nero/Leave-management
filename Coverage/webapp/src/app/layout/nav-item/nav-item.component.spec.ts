import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange, SimpleChanges, NO_ERRORS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/Common/http';
import { MatIconModule } from '@angular/material';

import { NavItemComponent } from './nav-item.component';
import { NavigationNode } from '../nav-menu/nav-menu.model';

describe('NavItemComponent', () => {

  let component: NavItemComponent;
  let fixture: ComponentFixture<NavItemComponent>;


  describe('(via TestBed)', () => {

    beforeEach(async () => {
      TestBed.configureTestingModule({
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
        imports: [HttpClientModule, MatIconModule],
        declarations: [NavItemComponent],
        schemas: [NO_ERRORS_SCHEMA]
      });
      TestBed.compileComponents();
    });

    beforeEach(async () => {
      fixture = TestBed.createComponent(NavItemComponent);
      component = fixture.componentInstance;
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
      component.selectedNodes = [component.node];
      component.ngOnChanges();
      const children = component.nodeChildren;
      expect(children.length).toEqual(2);
    });
  });
});
