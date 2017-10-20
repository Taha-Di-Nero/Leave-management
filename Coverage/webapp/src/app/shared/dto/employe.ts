import { EmployeState, Profile } from '../enums';
import { Area } from './area';

export class Employe {
  id: number;
  name: string;
  surname: string;
  email: string;
  areas: Area[];
  groups: Array<Array<Employe>>;
  profile: Profile;
  state: EmployeState;
  constructor(public  currentYearLeaves = 0) { }
}
