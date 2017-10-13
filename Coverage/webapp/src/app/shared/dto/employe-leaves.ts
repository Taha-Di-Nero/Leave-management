import { FullDayLeave } from './leave';
export class EmployeLeaves {

  constructor(public id: number, public fullName: string, public leavesNumber: number = 0,
    public leaves = new Array<FullDayLeave>(), public leavesIntervals = new Array<string>()) { }

}
