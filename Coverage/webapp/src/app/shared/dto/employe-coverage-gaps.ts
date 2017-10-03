
import {Area} from './area';
import {CoverageGap} from './coverage-gap';
import {Employe} from './employe';

export class EmployeCoverageGaps {
  date: Date;
  employes: Employe[];
  areas: Area[];
  dayGaps: CoverageGap[];
}
