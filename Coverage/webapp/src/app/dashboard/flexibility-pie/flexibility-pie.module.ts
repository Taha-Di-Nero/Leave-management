import { NgModule } from '@angular/core';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import { FlexibilityPieComponent } from './flexibility-pie.component';
import { GroupMembersJoinPipe } from './group-members-join.pipe';

@NgModule({
  imports: [
    NgxChartsModule,
    NgbModalModule
  ],
  declarations: [
    FlexibilityPieComponent,
    GroupMembersJoinPipe
  ],
  exports: [
    FlexibilityPieComponent
  ]
})

export class FlexibilityPieModule {}
