import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { UsedMaterialModule } from '../shared/used-material.module';

@NgModule({
  declarations: [
    NavMenuComponent,
    NavItemComponent
  ],
  exports: [
    NavMenuComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    UsedMaterialModule
  ]
})
export class LayoutModule { }
