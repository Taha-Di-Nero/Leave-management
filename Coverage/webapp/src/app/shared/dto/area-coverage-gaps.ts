import { Employe } from './employe';
import { DayCoverageGaps } from './day-coverage-gaps';

export class AreaCoverageGaps {
  area: string;
  singleEmploye: boolean;
  employes: Employe[];
  gaps: DayCoverageGaps[];
}

