import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { HolidayShutdown } from '../../shared/dto/holiday-shutdown';
import { HolidayShutdownsService } from '../../service/holiday-shutdowns.service';
import { dateBeforeThan } from '../../shared/validators';
import { after } from '../../shared/utils';

enum FormErrors { None, startDate, EndDate, DateBeforeThan }

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-holiday-shutdown-list',
    templateUrl: './holiday-shutdown-list.component.html'
})
export class HolidayShutdownListComponent implements AfterViewInit, OnDestroy {

    holidayShutdownsForm: FormGroup;
    startDateSubscription: Subscription;

    holidayShutdowns: HolidayShutdown[];
    holidayShutdownModel = new HolidayShutdown();

    editMode = false;

    constructor(private holidayShutdownsService: HolidayShutdownsService, private fb: FormBuilder, private ref: ChangeDetectorRef) {
        this.createForm();
    }

    ngAfterViewInit(): void {
        this.fetchHolidayShudowns();
    }

    fetchHolidayShudowns(): void {
        this.holidayShutdownsService.getHolidayShutdowns()
            .then(holidayShutdowns => this.updateHolidayShutdownsList(holidayShutdowns));
    }

    updateHolidayShutdownsList(holidayShutdowns: HolidayShutdown[]): void {
        this.holidayShutdowns = holidayShutdowns;
        this.holidayShutdowns.forEach(hs => {
            hs.from = new Date(hs.from);
            hs.to = new Date(hs.to);
        });
        this.ref.markForCheck();
    }

    createForm() {
        this.holidayShutdownsForm = this.fb.group({
            from: new FormControl(this.holidayShutdownModel.from, Validators.required),
            to: new FormControl(this.holidayShutdownModel.to, Validators.required)
        }, { validator: dateBeforeThan('from', 'to') });

        this.startDateSubscription = this.from.valueChanges.subscribe(date => {
            if (!this.to.value || after(date, this.to.value)) {
                this.to.patchValue(date);
            }
        });
    }

    saveHolidayShutdown(): void {
        if (this.holidayShutdownModel) {
            this.holidayShutdownsService.saveHolidayShutdown(this.holidayShutdownModel)
                .then(hs => {
                    this.resetForm();
                    this.fetchHolidayShudowns();
                });
        }
    }

    editHolidayShutdown(holidayShutdown: HolidayShutdown): void {
        this.holidayShutdownModel.id = holidayShutdown.id;
        this.from.setValue(this.getNgbDateStruct(holidayShutdown.from));
        this.to.setValue(this.getNgbDateStruct(holidayShutdown.to));
        this.editMode = true;
        this.ref.markForCheck();
    }

    resetView(): void {
        this.resetForm();
        this.ref.markForCheck();
    }

    deleteHolidayShutdown(holidayShutdown: HolidayShutdown): void {
        this.holidayShutdownsService.deleteHolidayShutdown(holidayShutdown.id)
            .then(() => {
                this.holidayShutdowns = this.holidayShutdowns.filter(s => s.id !== holidayShutdown.id);
                this.fetchHolidayShudowns();
            });
    }

    resetForm(): void {
        this.editMode = false;
        this.holidayShutdownModel = new HolidayShutdown();
        this.holidayShutdownsForm.reset();
    }

    private enumerateFormErrors(): FormErrors[] {
        const errors: FormErrors[] = [];
        const formDirty = (this.holidayShutdownsForm.dirty || this.holidayShutdownsForm.touched);
        if (formDirty && this.to.invalid && this.to.errors.required) {
            errors.push(FormErrors.EndDate);
        }
        if (formDirty && this.from.invalid && this.from.errors.required) {
            errors.push(FormErrors.startDate);
        }
        if (formDirty && this.holidayShutdownsForm.errors && this.holidayShutdownsForm.errors.dateError) {
            errors.push(FormErrors.DateBeforeThan);
        }
        if (errors.length === 0) {
            errors.push(FormErrors.None);
        }
        return errors;
    }

    isFormInvalid(): boolean {
        const errors = this.enumerateFormErrors();
        return errors[0] !== FormErrors.None;
    }

    getErrorMsg(): string[] {
        const errors = this.enumerateFormErrors();
        const msg: string[] = [];
        errors.forEach(e => {
            switch (e) {
                case FormErrors.EndDate:
                    msg.push('Data fine obbligatoria.');
                    break;
                case FormErrors.startDate:
                    msg.push('Data inizio obbligatoria.');
                    break;
                case FormErrors.DateBeforeThan:
                    msg.push('La data inzio deve essere maggiore o uguale alla data fine.');
                    break;
                default:
                    msg.push('');
            }
        });
        return msg;
    }

    get from() { return this.holidayShutdownsForm.get('from'); }
    get to() { return this.holidayShutdownsForm.get('to'); }

    getNgbDateStruct(date: Date): NgbDateStruct {
        return {
            'year': date.getFullYear(),
            'month': date.getMonth() + 1,
            'day': date.getDate()
        };
    }

    ngOnDestroy(): void {
        this.startDateSubscription.unsubscribe();
    }
}

