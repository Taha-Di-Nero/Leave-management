import { NgModule } from '@angular/core';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import { FlexibilityPieComponent } from './flexibility-pie/flexibility-pie.component';
import { YearsCoverageComponent } from './years-coverage/years-coverage.component';
import { GroupMembersJoinPipe } from './flexibility-pie/group-members-join.pipe';


@NgModule({
  imports: [
    NgxChartsModule,
    NgbModalModule
  ],
  declarations: [
    FlexibilityPieComponent,
    YearsCoverageComponent,
    GroupMembersJoinPipe
  ],
  exports: [
    FlexibilityPieComponent,
    YearsCoverageComponent
  ]
})

export class DashboardModule {}
