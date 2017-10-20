import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

import { Employe } from '../../shared/dto/employe';
import { EmployesService } from '../../service/employes.service';
import { Area } from '../../shared/dto/area';
import { AreaComponent, } from '../areas/area.component';
import { ApplicationSharedData } from '../../shared/application-shared-data';
import { EmployesDataSource } from './employes-list-datasource';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-employes-list',
    templateUrl: './employes-list.component.html',
    styleUrls: ['./employes-list.component.css']
})
export class EmployeListComponent {

    @ViewChild('areasAutocomplete') areasAutocomplete: AreaComponent;

    employeForm: FormGroup;

    employes: Employe[];
    employesDataSource: EmployesDataSource;
    employeModel = new Employe();
    currentArea: Area;

    editMode = false;

    constructor(private employesService: EmployesService, private fb: FormBuilder, private ref: ChangeDetectorRef) {
        this.fetchEmployes();
        this.createForm();
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
            this.employesService.saveEmploye(this.employeModel)
                .then(hs => {
                    this.resetForm();
                    this.fetchEmployes();
                });
        }
    }

    editEmploye(employe: Employe): void {
        this.resetForm();
        this.employeModel = JSON.parse(JSON.stringify(employe));
        this.surname.setValue(this.employeModel.surname);
        this.name.setValue(this.employeModel.name);
        this.email.setValue(this.employeModel.email);
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
                this.employes = this.employes.filter(s => s.id !== employe.id);
                this.fetchEmployes();
            });
    }
    getEmailErrorMessage() {
        return this.email.hasError('required') ? 'Specificare un email.' :
            this.email.hasError('email') ? 'Email non valido.' : '';
    }

    private resetForm(): void {
        this.editMode = false;
        this.employeForm.reset();
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
        this.currentArea = area;
        this.ref.markForCheck();
    }

    private removeChip(area: Area): void {
        const index = this.employeModel.areaList.findIndex(a => area.id === a.id || area.description === a.description);
        if (index >= 0) {
            this.employeModel.areaList.splice(index, 1);
        }
    }

    get name() { return this.employeForm.get('name'); }
    get surname() { return this.employeForm.get('surname'); }
    get email() { return this.employeForm.get('email'); }
}

