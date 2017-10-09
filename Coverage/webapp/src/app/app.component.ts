import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, ViewChild, TemplateRef } from '@angular/core';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { saveAs } from 'file-saver';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SecurityService } from './service/security.service';
import { Employe } from './shared/dto/employe';
import { FullDayLeave } from './shared/dto/leave';
import { FullYearLeavesComponent } from './full-year-leaves/full-year-leaves.component';
import { FullYearLeavesOverlapsComponent } from './full-year-leaves-overlaps/full-year-leaves-overlaps.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApprovationMode, MenuItemIds, Profile } from './shared/enums';
import { LeaveService } from './service/leave.service';
import { NavigationNode } from './layout/nav-menu/nav-menu.model';
import { sideNavNodes } from './layout/nav-menu/menu-nodes';
import { CoverageService } from './service/coverage.service';
import { ApplicationSharedData } from './shared/application-shared-data';
import { EmployeLeaves } from './shared/dto/employe-leaves';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    @ViewChild('shutDownModal') shutDownModal: TemplateRef<any>;
    @ViewChild('inflexibilityPeriodModal') inflexibilityPeriodModal: TemplateRef<any>;
    @ViewChild('approvationModal') approvationModal: TemplateRef<any>;

    @BlockUI() blockUI: NgBlockUI;

    sideNavNodes = sideNavNodes;

    fabToolTipMsg: string;
    fabLeavesIcon: boolean;

    leavesPlanTooltip = 'Piano Ferie';
    yearCoverageTooltip = 'Copertura annuale';
    showCoverageTitle = false;

    ApplicationSharedData = ApplicationSharedData;
    ApprovationMode = ApprovationMode;
    requestedApprovationMode: ApprovationMode;

    title = 'Flessibiltà';

    currentView: any;
    loggedEmploye: Employe;
    displayLeavesPlanDownload = false;
    isManager = false;

    constructor(private securityService: SecurityService, private leaveService: LeaveService,
        private coverageService: CoverageService, private ref: ChangeDetectorRef, private modal: NgbModal) { }

    ngOnInit() {
        this.securityService.getLoggedEmploye().then(e => this.setLoggedUser(e)).catch(reason => this.setLoggedUser(undefined));
    }

    private setLoggedUser(e: Employe): void {
        this.loggedEmploye = e;
        this.isManager = e ? (this.loggedEmploye.profile === Profile.Manager) : false;
        ApplicationSharedData.getInstance().loggedEmploye = e;
        if (e && this.isManager) {
            ApplicationSharedData.getInstance().setFlexibilityComposition(this.coverageService, this.leaveService);
            this.showCoverageTitle = true;
            this.currentView = FullYearLeavesOverlapsComponent;
            this.displayLeavesPlanDownload = true;
            this.fabToolTipMsg = this.leavesPlanTooltip;
            this.fabLeavesIcon = true;
        } else if (e && !this.isManager) {
            this.showCoverageTitle = false;
            this.currentView = FullYearLeavesComponent;
        } else {
            this.currentView = AccessDeniedComponent;
        }
        this.ref.markForCheck();
    }


    private toggleLeavesCoverage(): void {
        if (this.currentView === FullYearLeavesOverlapsComponent) {
            this.showCoverageTitle = false;
            this.currentView = FullYearLeavesComponent;
            this.fabToolTipMsg = this.yearCoverageTooltip;
            this.fabLeavesIcon = false;
            this.displayLeavesPlanDownload = false;
        } else {
            this.showCoverageTitle = true;
            this.currentView = FullYearLeavesOverlapsComponent;
            this.fabToolTipMsg = this.leavesPlanTooltip;
            this.fabLeavesIcon = true;
            this.displayLeavesPlanDownload = true;
        }
        this.ref.markForCheck();
    }

    private goToEmploeLeaves(employeleaves: EmployeLeaves): void {
        ApplicationSharedData.getInstance().setEmpAutoCompInjectSearch(employeleaves.fullName);
        if (this.currentView === FullYearLeavesOverlapsComponent) {
            this.showCoverageTitle = false;
            this.currentView = FullYearLeavesComponent;
            this.fabToolTipMsg = this.yearCoverageTooltip;
            this.fabLeavesIcon = false;
            this.displayLeavesPlanDownload = false;
        }
        this.ref.markForCheck();
    }

    private downloadLeavesPlan(): void {
        this.blockUI.start('Attendere prego...');
        this.leaveService.getLeavesPlan(ApplicationSharedData.getInstance().currentYear)
            .then(blob => {
                saveAs(blob, `piano_ferie-${ApplicationSharedData.getInstance().currentYear}.xlsx`);
                this.stopBlockUI();
            }).catch(error => this.stopBlockUI());
    }

    private stopBlockUI(): void {
        this.blockUI.stop();
        this.ref.markForCheck();
    }


    private logout(): void {
        this.currentView = undefined;
        this.loggedEmploye = undefined;
        ApplicationSharedData.getInstance().loggedEmploye = undefined;
        this.securityService.logout().catch(feak => {
            window.location.reload(true);
        });
    }

    openNodeModal(node: NavigationNode): void {
        switch (node.id) {
            case MenuItemIds.Chiusure:
                this.modal.open(this.shutDownModal, { size: 'lg', windowClass: 'animated bounceInLeft' });
                break;
            case MenuItemIds.Presenze:
                this.modal.open(this.inflexibilityPeriodModal, { size: 'lg', windowClass: 'modal-xxl animated bounceInLeft' });
                break;
            case MenuItemIds.AddedLeaves:
                this.requestedApprovationMode = ApprovationMode.Add;
                this.modal.open(this.approvationModal, { size: 'lg', windowClass: 'animated bounceInLeft' });
                break;
            case MenuItemIds.RemovedLeaves:
                this.requestedApprovationMode = ApprovationMode.Remove;
                this.modal.open(this.approvationModal, { size: 'lg', windowClass: 'animated bounceInLeft' });
                break;
        }
    }
}
