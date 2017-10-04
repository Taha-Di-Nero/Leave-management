import { Employe } from './employe';
import { LeaveState } from '../enums';

export class FullDayLeave {
  id: number;
  date: Date;
  state: LeaveState;
  employe: Employe;
}
