import { FormGroup } from '@angular/forms';

import { after } from './utils';

export function dateBeforeThan(from: string, to: string) {
    return (group: FormGroup): { [key: string]: any } => {
        const f = group.controls[from];
        const t = group.controls[to];
        if (after(f.value, t.value)) {
            return {
                dateError: true
            };
        }
        return {};
    };
}

export function arrayNotEmpty<T>(array: Array<T[]>) {
    return (group: FormGroup): { [key: string]: any } => {
        if (array[0].length <= 0) {
            return {
                arrayEmpty: true
            };
        }
        return {};
    };
}
