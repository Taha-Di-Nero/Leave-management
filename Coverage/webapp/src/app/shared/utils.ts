import { isSaturday, isSunday, startOfMonth, endOfMonth, addDays } from 'date-fns';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Utils {

    private static fixedHolidays = [[1, 6], [], [], [25], [1], [2], [], [15], [], [], [1], [8, 25, 26]];

    static getYearMonthsWorkingDays(yearMonths: Date[]): number[] {
        const yearMonthsWorkingDays: number[] = new Array<number>();
        yearMonths.forEach(m => {
            let wd = 0;
            for (let d = startOfMonth(m); d <= endOfMonth(m); d = addDays(d, 1)) {
                if (!this.isHolidayDay(d)) {
                    wd++;
                }
            }
            yearMonthsWorkingDays.push(wd);
        });
        return yearMonthsWorkingDays;
    }

    static isHolidayDay(date: Date): boolean {
        const day = date.getDate();
        const month = date.getMonth();
        return isSaturday(date) || isSunday(date) || this.fixedHolidays[month].indexOf(day) !== -1 || this.isLittleEaster(date);
    }

    static isLittleEaster(day: Date): boolean {
        let a;
        let b;
        let c;
        const Y = day.getFullYear();
        let d;
        let e;
        let M;
        let N;
        let giorno;
        let mese;

        if (Y < 2099) {
            M = 24;
            N = 5;
        } else if (Y < 2199) {
            M = 24;
            N = 6;
        } else if (Y < 2299) {
            M = 25;
            N = 0;
        } else if (Y < 2399) {
            M = 26;
            N = 1;
        } else if (Y < 2499) {
            M = 25;
            N = 1;
        }

        a = Y % 19;
        b = Y % 4;
        c = Y % 7;
        d = ((19 * a) + M) % 30;
        e = ((2 * b) + (4 * c) + (6 * d) + N) % 7;

        if (d + e < 10) {
            giorno = d + e + 22;
            mese = 2;
        } else {
            giorno = d + e - 9;
            mese = 3;
        }

        if (giorno === 26 && mese === 4) {
            giorno = 19;
            mese = 3;
        }

        if (giorno === 25 && mese === 4 && d === 28 && e === 6 && a > 10) {
            giorno = 18;
            mese = 3;
        }

        return (day.getMonth() === mese && (day.getDate() - 1) === giorno);
    }
}


export const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
one && two && two.year === one.year && two.month === one.month && two.day === one.day;

export const before = (one: NgbDateStruct, two: NgbDateStruct) =>
!one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

export const after = (one: NgbDateStruct, two: NgbDateStruct) =>
!one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;
