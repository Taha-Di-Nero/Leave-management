import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { InflexibilityPeriod } from '../../shared/dto/inflexibility-period';
import { InflexibilityPeriodsService } from '../../service/inflexibility-periods.service';
import { InflexibilityPeriodMotivation } from '../../shared/dto/inflexibility-period-motivation';
import { InflexibilityPeriodMotivationComponent, } from '../inflexibility-period-motivation/inflexibility-period-motivation.component';
import { Employe } from '../../shared/dto/employe';
import { arrayNotEmpty, dateBeforeThan } from '../../shared/validators';
import { EmployeAutocompleteComponent } from '../../employe-autocomplete/employe-autocomplete.component';
import { EmployeState } from '../../shared/enums';
import { after } from '../../shared/utils';
import { ApplicationSharedData } from '../../shared/application-shared-data';


enum FormErrors { None, startDate, EndDate, DateBeforeThan, MotivationEmpty, EmployeArrayEmpty }

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-inflexibility-period-list',
    templateUrl: './inflexibility-period-list.component.html',
    styleUrls: ['./inflexibility-period-list.component.css']
})
export class InflexibilityPeriodListComponent implements AfterViewInit, OnDestroy {

    @ViewChild('employeAutocomplete') employeAutocomplete: EmployeAutocompleteComponent;
    private chipsCssSuffix = ' font-weight-bolder employe-chip';

    @ViewChild('motivationAutocomplete') motivationAutocomplete: InflexibilityPeriodMotivationComponent;

    inflexibilityPeriodForm: FormGroup;
    employesArrayToValidate = new Array<Employe[]>();
    startDateSubscription: Subscription;

    inflexibilityPeriods: InflexibilityPeriod[];
    inflexibilityPeriodModel = new InflexibilityPeriod();

    editMode = false;

    ApplicationSharedData = ApplicationSharedData;

    constructor(private inflexibilityPeriodsService: InflexibilityPeriodsService, private fb: FormBuilder, private ref: ChangeDetectorRef) {
        this.employesArrayToValidate.push(this.inflexibilityPeriodModel.employes);
        this.createForm();
    }

    ngAfterViewInit(): void {
        this.fetchInflexibilityPeriods();
    }

    fetchInflexibilityPeriods(): void {
        this.inflexibilityPeriodsService.getInflexibilityPeriods()
            .then(inflexibilityPeriods => this.updateInflexibilityPeriodsList(inflexibilityPeriods));
    }

    updateInflexibilityPeriodsList(inflexibilityPeriods: InflexibilityPeriod[]): void {
        inflexibilityPeriods.forEach(hs => this.setEmployeState(hs.employes));
        inflexibilityPeriods.forEach(hs => {
            hs.from = new Date(hs.from);
            hs.to = new Date(hs.to);
        });
        this.inflexibilityPeriods = inflexibilityPeriods;
        this.ref.markForCheck();
    }

    setEmployeState(employes: Employe[]): void {
        employes.forEach(e => {
            const employe = this.employeAutocomplete.employes.find(emp => emp.id === e.id);
            e.state = employe.state;
        });
    }

    createForm() {
        this.inflexibilityPeriodForm = this.fb.group({
            from: new FormControl(this.inflexibilityPeriodModel.from, Validators.required),
            to: new FormControl(this.inflexibilityPeriodModel.to, Validators.required),
            formValidatorHelper: new FormControl('Just to trigger validation', Validators.required)
        }, {
                validator: Validators.compose([dateBeforeThan('from', 'to'),
                arrayNotEmpty(this.employesArrayToValidate), this.motivationEmpty()])
            });
        this.startDateSubscription = this.from.valueChanges.subscribe(date => {
            if (!this.to.value || after(date, this.to.value)) {
                this.to.patchValue(date);
            }
        });
    }

    saveInflexibilityPeriod(): void {
        if (this.inflexibilityPeriodModel) {
            this.inflexibilityPeriodsService.saveInflexibilityPeriod(this.inflexibilityPeriodModel)
                .then(hs => {
                    this.resetForm();
                    this.fetchInflexibilityPeriods();
                });
        }
    }

    editInflexibilityPeriod(inflexibilityPeriod: InflexibilityPeriod): void {
        this.inflexibilityPeriodModel = JSON.parse(JSON.stringify(inflexibilityPeriod));
        this.employesArrayToValidate.splice(0, 1);
        this.employesArrayToValidate.push(this.inflexibilityPeriodModel.employes);
        this.from.setValue(this.getNgbDateStruct(inflexibilityPeriod.from));
        this.to.setValue(this.getNgbDateStruct(inflexibilityPeriod.to));
        this.editMode = true;
        this.ref.markForCheck();
    }

    private resetView(): void {
        this.resetForm();
        this.ref.markForCheck();
    }

    private deleteInflexibilityPeriod(inflexibilityPeriod: InflexibilityPeriod): void {
        this.inflexibilityPeriodsService.deleteInflexibilityPeriod(inflexibilityPeriod.id)
            .then(() => {
                this.inflexibilityPeriods = this.inflexibilityPeriods.filter(s => s.id !== inflexibilityPeriod.id);
                this.fetchInflexibilityPeriods();
            });
    }

    private enumerateFormErrors(): FormErrors[] {
        const errors: FormErrors[] = [];
        const formDirty = (this.inflexibilityPeriodForm.dirty || this.inflexibilityPeriodForm.touched);
        if (formDirty && this.to.invalid && this.to.errors.required) {
            errors.push(FormErrors.EndDate);
        }
        if (formDirty && this.from.invalid && this.from.errors.required) {
            errors.push(FormErrors.startDate);
        }
        if (formDirty && this.inflexibilityPeriodForm.errors && this.inflexibilityPeriodForm.errors.dateError) {
            errors.push(FormErrors.DateBeforeThan);
        }
        if (formDirty && this.inflexibilityPeriodForm.errors && this.inflexibilityPeriodForm.errors.motivationEmpty) {
            errors.push(FormErrors.MotivationEmpty);
        }
        if (formDirty && this.inflexibilityPeriodForm.errors && this.inflexibilityPeriodForm.errors.arrayEmpty) {
            errors.push(FormErrors.EmployeArrayEmpty);
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
                case FormErrors.MotivationEmpty:
                    msg.push('Aggiungere un motivo.');
                    break;
                case FormErrors.EmployeArrayEmpty:
                    msg.push('Aggiungere al meno un dipendente.');
                    break;
                default:
                    msg.push('');
            }
        });
        return msg;
    }

    private resetForm(): void {
        this.editMode = false;
        this.motivationAutocomplete.resetSearch();
        this.employeAutocomplete.resetSearch();
        this.inflexibilityPeriodModel = new InflexibilityPeriod();
        this.employesArrayToValidate.splice(0, 1);
        this.employesArrayToValidate.push(this.inflexibilityPeriodModel.employes);
        this.inflexibilityPeriodForm.reset(({ formValidatorHelper: 'Just to trigger array validation' }));
    }

    private selectedEmploye(employe: Employe): void {
        const index = this.inflexibilityPeriodModel.employes.findIndex(a => employe.id === a.id);
        if (index === -1) {
            this.inflexibilityPeriodModel.employes.push(this.employeAutocomplete.getselectedEmploye());
            this.employeAutocomplete.resetSearch();
            this.formValidatorHelper.markAsTouched();
            this.inflexibilityPeriodForm.updateValueAndValidity();
        }
    }

    private removeChip(employe: Employe): void {
        const index = this.inflexibilityPeriodModel.employes.findIndex(a => employe.id === a.id);
        if (index >= 0) {
            this.inflexibilityPeriodModel.employes.splice(index, 1);
            this.formValidatorHelper.markAsTouched();
            this.inflexibilityPeriodForm.updateValueAndValidity();
        }
    }

    private getChipColor(employe: Employe): string {
        switch (employe.state) {
            case EmployeState.Flexible:
                return 'flexible' + this.chipsCssSuffix;
            case EmployeState.Inflexible:
                return 'inflexible' + this.chipsCssSuffix;
            case EmployeState.Indifferent:
                return 'indifferent' + this.chipsCssSuffix;
        }
    }

    selectedMotivation(motivation: InflexibilityPeriodMotivation): void {
        this.inflexibilityPeriodModel.inflexibilityPeriodMotivation = motivation;
        this.formValidatorHelper.markAsTouched();
        this.inflexibilityPeriodForm.updateValueAndValidity();
    }

    resetMotivation(): void {
        this.inflexibilityPeriodModel.inflexibilityPeriodMotivation = undefined;
        this.formValidatorHelper.markAsTouched();
        this.inflexibilityPeriodForm.updateValueAndValidity();
    }

    motivationEmpty() {
        return (group: FormGroup): { [key: string]: any } => {
            if (!this.inflexibilityPeriodModel.inflexibilityPeriodMotivation) {
                return {
                    motivationEmpty: true
                };
            }
            return {};
        };
    }

    get from() { return this.inflexibilityPeriodForm.get('from'); }
    get to() { return this.inflexibilityPeriodForm.get('to'); }
    get formValidatorHelper() { return this.inflexibilityPeriodForm.get('formValidatorHelper'); }

    getNgbDateStruct(date: Date): NgbDateStruct {
        return {
            'year': date.getFullYear(), 'month': date.getMonth() + 1,
            'day': date.getDate()
        };
    }

    ngOnDestroy(): void {
        this.startDateSubscription.unsubscribe();
    }
}

