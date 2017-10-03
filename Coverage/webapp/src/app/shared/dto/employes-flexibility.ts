import { Employe } from './employe';

export class EmployesFlexibility {

    flexible: Employe[];
    inflexible: Employe[];
    indifferent: Employe[];

    constructor(json: any) {
        this.flexible = json.flexible;
        this.inflexible = json.inflexible;
        this.indifferent = json.indifferent;
    }

    public getAll(): Employe[] {
        return this.inflexible.concat(this.flexible).concat(this.indifferent);
    }
}
