import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { Employe } from '../../shared/dto/employe';
import { EmployesService } from '../../service/employes.service';
import { Area } from '../../shared/dto/area';
import { AreaComponent, } from '../areas/area.component';
import { ApplicationSharedData } from '../../shared/application-shared-data';
import { EmployesDataSource } from '../employes-list/employes-list-datasource';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-employes',
    templateUrl: './employes.component.html',
    styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

    @ViewChild('areasAutocomplete') areasAutocomplete: AreaComponent;

    @Output() employesListChanged = new EventEmitter<void>();

    employeForm: FormGroup;

    employes: Employe[];
    employesDataSource: EmployesDataSource;
    employeModel = new Employe();
    currentArea: Area;

    editMode = false;

    insertMode = false;
    insertHeaderClass = 'emp-form-opener emp-form-opener-collapsed';
    private tostPos = { positionClass: 'toast-top-center' };

    constructor(private employesService: EmployesService, private fb: FormBuilder, private ref: ChangeDetectorRef, private toastr: ToastrService) {
        this.createForm();
    }

    ngOnInit(): void {
        this.fetchEmployes();
    }

    fetchEmployes(): void {
        this.employesService.getEmployes().then(employes => this.updateEmployesList(employes));
    }

    updateEmployesList(employes: Employe[]): void {
        this.employes = employes;
        this.employesDataSource = new EmployesDataSource(employes);
        this.ref.markForCheck();
    }

    createForm() {
        this.employeForm = this.fb.group({
            name: new FormControl(this.employeModel.name, Validators.required),
            surname: new FormControl(this.employeModel.surname, Validators.required),
            email: new FormControl(this.employeModel.email, [Validators.required, Validators.email]),
        });
    }

    saveEmploye(): void {
        if (this.employeModel) {
            const e = this.employeModel;
            this.employesService.saveEmploye(e)
                .then(() => {
                    const msgEnd = e.id > 0 ? 'aggiornat' : 'creati';
                    this.toastr.success(`I dati del dipendente ${e.surname} ${e.name} sono stati ${msgEnd}.`, '', this.tostPos);
                    setTimeout(() => {
                        this.resetForm();
                        this.fetchEmployes();
                        this.employesListChanged.emit();
                    }, 10);
                }).catch(err => this.toastr.error('Errore Generico!', '', this.tostPos));
        }
    }

    editEmploye(employe: Employe): void {
        this.resetForm();
        this.employeModel = JSON.parse(JSON.stringify(employe));
        this.surname.setValue(this.employeModel.surname);
        this.name.setValue(this.employeModel.name);
        this.email.setValue(this.employeModel.email);
        this.insertMode = false;
        this.editMode = true;
        this.ref.markForCheck();
    }

    private resetView(): void {
        this.resetForm();
        this.ref.markForCheck();
    }

    private deleteEmploye(employe: Employe): void {
        this.employesService.deleteEmploye(employe.id)
            .then(() => {
                const e = employe;
                this.toastr.success(`I dati del dipendente ${e.surname} ${e.name} sono stati rimossi.`, '', this.tostPos);
                setTimeout(() => {
                    this.fetchEmployes();
                    this.employesListChanged.emit();
                    const logged = ApplicationSharedData.getInstance().loggedEmploye;
                    ApplicationSharedData.getInstance().setEmpAutoCompInjectSearch(logged.surname.concat(' ', logged.name));
                }, 10);
            }).catch(err => this.toastr.error('Errore Generico!', '', this.tostPos));
    }

    getEmailErrorMessage() {
        return this.email.hasError('required') ? 'Specificare un email.' :
            this.email.hasError('email') ? 'Email non valido.' : '';
    }

    private insertClicked() {
        this.insertMode = !this.insertMode;
        if (this.insertMode) {
            this.insertHeaderClass = 'emp-form-opener emp-form-opener-exapnded';
        } else {
            this.insertHeaderClass = 'emp-form-opener emp-form-opener-collapsed';
        }
        this.ref.markForCheck();
    }

    private resetForm(): void {
        this.editMode = false;
        this.employeForm.reset();
        this.currentArea = undefined;
        this.areasAutocomplete.resetSearch();
        this.employeModel = new Employe();
    }

    private selectedArea(area: Area): void {
        const index = this.employeModel.areaList.findIndex(a => area.id === a.id || area.description === a.description);
        if (index === -1) {
            this.employeModel.areaList.push(area);
        } else {
            this.employeModel.areaList[index] = area;
        }
        this.employeModel.areaList.sort((a, b) => a.description.toLocaleLowerCase().localeCompare(b.description.toLocaleLowerCase()));
        this.currentArea = area;
        this.ref.markForCheck();
    }

    private removeChip(area: Area): void {
        const index = this.employeModel.areaList.findIndex(a => area.id === a.id || area.description === a.description);
        if (index >= 0) {
            this.employeModel.areaList.splice(index, 1);
            this.currentArea = undefined;
        }
    }

    private chipSelected(area: Area) {
        const index = this.employeModel.areaList.findIndex(a => area.id === a.id || area.description === a.description);
        this.currentArea = this.employeModel.areaList[index];
        this.ref.markForCheck();
    }

    private get toggleFormVisibility() {
        if (this.insertMode || this.editMode) {
            return 'form-visible';
        }
        return 'form-hidden';
    }

    get name() { return this.employeForm.get('name'); }
    get surname() { return this.employeForm.get('surname'); }
    get email() { return this.employeForm.get('email'); }
}

