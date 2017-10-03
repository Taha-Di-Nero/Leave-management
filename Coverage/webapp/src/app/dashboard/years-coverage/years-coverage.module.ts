import { NgModule } from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import { YearsCoverageComponent } from './years-coverage.component';

@NgModule({
  imports: [
    NgxChartsModule
  ],
  declarations: [
    YearsCoverageComponent
  ],
  exports: [
    YearsCoverageComponent
  ]
})

export class YearsCoverageModule {}
