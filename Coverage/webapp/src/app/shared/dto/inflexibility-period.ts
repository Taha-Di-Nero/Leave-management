import { InflexibilityPeriodMotivation } from './inflexibility-period-motivation';
import { Employe } from './employe';

export class InflexibilityPeriod {
  id: number;
  from: Date;
  to: Date;
  inflexibilityPeriodMotivation: InflexibilityPeriodMotivation;
  employes: Employe[] = [];
}
