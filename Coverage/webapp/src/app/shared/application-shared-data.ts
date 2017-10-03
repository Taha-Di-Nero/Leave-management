import { FullDayLeave } from './dto/leave';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { ViewMode } from './enums';
import { CalendarEvent } from 'calendar-utils/dist/calendar-utils';
import { EmployesFlexibility } from './dto/employes-flexibility';
import { Employe } from './dto/employe';
import { CoverageService } from '../service/coverage.service';
import { LeaveService } from '../service/leave.service';

export class ApplicationSharedData {

    private static instance: ApplicationSharedData = new ApplicationSharedData();

    loggedEmploye: Employe;

    private selectedDate: Date = new Date();
    private loadedYears: any = {};
    private loadedMonths: any = {};

    private employesFlexibility = new ReplaySubject<EmployesFlexibility>(1);

    private yearsCoverage = new ReplaySubject<CalendarEvent[]>(1);

    currentYear = new Date().getFullYear();

    constructor() {
        if (ApplicationSharedData.instance) {
            throw new Error('Error: Instantiation failed: Use LeavesOverlapsModel.getInstance() instead of new.');
        }
        ApplicationSharedData.instance = this;
    }

    public static getInstance(): ApplicationSharedData {
        return ApplicationSharedData.instance;
    }

    public setSelectedDate(value: Date): void {
        this.selectedDate = value;
    }

    public getSelectedDate(): Date {
        return this.selectedDate;
    }

    public getEmployesFlexibility(): ReplaySubject<EmployesFlexibility> {
        return this.employesFlexibility;
    }

    public setFlexibilityComposition(coverageService: CoverageService, leaveService: LeaveService): void {
        coverageService.searchFlexibility()
            .then(employesFlexibility => leaveService.getYearLeaves(ApplicationSharedData.getInstance().currentYear)
                .then(leaves => this.setEmployeLeavesNumber(employesFlexibility, leaves)));

    }

    private setEmployeLeavesNumber(employesFlexibility: EmployesFlexibility, leaves: FullDayLeave[]): void {
        employesFlexibility.getAll().forEach(e => {
            const employeLeaves = leaves.filter(l => l.employe.id === e.id);
            e.currentYearLeaves = employeLeaves ? employeLeaves.length : 0;
        });
        const employe = employesFlexibility.getAll().find(e => e.id === ApplicationSharedData.instance.loggedEmploye.id);
        ApplicationSharedData.instance.loggedEmploye = employe;
        ApplicationSharedData.instance.getEmployesFlexibility().next(employesFlexibility);
    }

    public getYearsCoverage(): ReplaySubject<CalendarEvent[]> {
        return this.yearsCoverage;
    }

    public addLoadedYear(year: number, gaps: CalendarEvent[]): void {
        this.yearsCoverage.next(gaps);
        this.loadedYears[year] = gaps;
    }

    public getLoadedYear(year: number): CalendarEvent[] {
        this.yearsCoverage.next(this.loadedYears[year]);
        return this.loadedYears[year];
    }

    public addLoadedMonth(mode: ViewMode, month: Date, gaps: CalendarEvent[]): void {
        const clone = new Date(month.getTime());
        clone.setDate(1);
        this.loadedMonths[mode.toString() + clone.getTime()] = gaps;
    }

    public getLoadedMonth(mode: ViewMode, month: Date): CalendarEvent[] {
        const clone = new Date(month.getTime());
        clone.setDate(1);
        return this.loadedMonths[mode.toString() + clone.getTime()];
    }

}
