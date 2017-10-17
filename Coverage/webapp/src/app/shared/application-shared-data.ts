import { FullDayLeave } from './dto/leave';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { LeaveState, ViewMode } from './enums';
import { CalendarEvent } from 'calendar-utils/dist/calendar-utils';
import { EmployesFlexibility } from './dto/employes-flexibility';
import { Employe } from './dto/employe';
import { CoverageService } from '../service/coverage.service';
import { LeaveService } from '../service/leave.service';

export class ApplicationSharedData {

    private static instance: ApplicationSharedData = new ApplicationSharedData();

    loggedEmploye: Employe;

    private _selectedDate: Date = new Date();
    private _loadedYears: any = {};
    private _loadedMonths: any = {};


    private _empAutoCompInjectSearch = new ReplaySubject<string>(1);

    private employesFlexibility = new ReplaySubject<EmployesFlexibility>(1);
    private employes = new ReplaySubject<Employe[]>(1);

    private yearsCoverage = new ReplaySubject<CalendarEvent[]>(1);

    currentYear = new Date().getFullYear();

    constructor() {
        if (!!ApplicationSharedData.instance) {
            throw new Error('Error: Instantiation failed: Use LeavesOverlapsModel.getInstance() instead of new.');
        }
        ApplicationSharedData.instance = this;
    }

    public static getInstance(): ApplicationSharedData {
        return ApplicationSharedData.instance;
    }

    public setSelectedDate(value: Date): void {
        this._selectedDate = value;
    }

    public getSelectedDate(): Date {
        return this._selectedDate;
    }

    public getEmployesFlexibility(): ReplaySubject<EmployesFlexibility> {
        return this.employesFlexibility;
    }

    public getEmployes(): ReplaySubject<Employe[]> {
        return this.employes;
    }

    public setFlexibilityComposition(coverageService: CoverageService, leaveService: LeaveService): void {
        coverageService.searchFlexibility()
            .then(employesFlexibility => leaveService.getYearLeaves(ApplicationSharedData.getInstance().currentYear)
                .then(leaves => this.setEmployeLeavesNumber(employesFlexibility, leaves)));

    }

    private setEmployeLeavesNumber(employesFlexibility: EmployesFlexibility, leaves: FullDayLeave[]): void {
        employesFlexibility.getAll().forEach(e => {
            const employeLeaves = leaves.filter(l => l.employe.id === e.id);
            e.currentYearLeaves = employeLeaves ? employeLeaves.filter(l => l.state === LeaveState.Approved).length : 0;
        });
        const employes = employesFlexibility.getAll();
        this.employes.next(employes);
        const employe = employes.find(e => e.id === this.loggedEmploye.id);
        this.loggedEmploye = employe;
        this.getEmployesFlexibility().next(employesFlexibility);
    }

    public getYearsCoverage(): ReplaySubject<CalendarEvent[]> {
        return this.yearsCoverage;
    }

    public addLoadedYear(year: number, gaps: CalendarEvent[]): void {
        this.yearsCoverage.next(gaps);
        this._loadedYears[year] = gaps;
    }

    public getLoadedYear(year: number): CalendarEvent[] {
        this.yearsCoverage.next(this._loadedYears[year]);
        return this._loadedYears[year];
    }

    public addLoadedMonth(mode: ViewMode, month: Date, gaps: CalendarEvent[]): void {
        const clone = new Date(month.getTime());
        clone.setDate(1);
        this._loadedMonths[mode.toString() + clone.getTime()] = gaps;
    }

    public getLoadedMonth(mode: ViewMode, month: Date): CalendarEvent[] {
        const clone = new Date(month.getTime());
        clone.setDate(1);
        return this._loadedMonths[mode.toString() + clone.getTime()];
    }

    public setEmpAutoCompInjectSearch(value: string): void {
        this._empAutoCompInjectSearch.next(value);
    }

    public getEmpAutoCompInjectSearch(): ReplaySubject<string> {
        return this._empAutoCompInjectSearch;
    }

}
