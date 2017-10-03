import { EmployeState, Profile } from '../enums';

export class Employe {
  id: number;
  name: string;
  surname: string;
  groups: Array<Array<Employe>>;
  profile: Profile;
  state: EmployeState;
  constructor(public  currentYearLeaves = 0) { }
}
