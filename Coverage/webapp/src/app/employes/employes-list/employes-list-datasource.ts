import { DataSource } from '@angular/cdk/table';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';
import { merge } from 'rxjs/observable/merge';

import { Employe } from '../../shared/dto/employe';

export class EmployesDataSource extends DataSource<any> {
    _filterChange = new BehaviorSubject('');
    get filter(): string { return this._filterChange.value; }
    set filter(filter: string) { this._filterChange.next(filter); }

    constructor(private _employes: Employe[]) {
        super();
    }

    connect(): Observable<Employe[]> {
        const displayDataChanges = [
            of(this._employes),
            this._filterChange,
        ];

        return merge(...displayDataChanges).map(() => {
            return this._employes.slice().filter((item: Employe) => {
                const searchStr = (item.surname + item.name).toLowerCase();
                return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
            });
        });
    }

    disconnect() { }
}
