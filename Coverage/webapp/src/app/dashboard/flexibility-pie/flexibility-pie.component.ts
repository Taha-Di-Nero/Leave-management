import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EmployesFlexibility } from '../../shared/dto/employes-flexibility';
import { ApplicationSharedData } from '../../shared/application-shared-data';
import { Employe } from '../../shared/dto/employe';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-flexibility-pie',
  templateUrl: './flexibility-pie.component.html',
  styleUrls: ['./flexibility-pie.component.css']
})
export class FlexibilityPieComponent implements OnInit, OnDestroy {

  employeFlexibilitySubscription: Subscription;

  @ViewChild('modalWin') modalWin: TemplateRef<any>;

  modalData: {
    title: string,
    titleCss: string,
    listString: string,
    listArray: Employe[]
  };

  // Workaround for IE11 ngbmodal close focus
  activeElement: Element;

  data: any[] = [];

  employesFexibility: EmployesFlexibility;

  view: any[] = [300, 200];

  colorScheme = {
    domain: ['#e3bc08', '#ad2121']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  showLegend = false;

  constructor(private modal: NgbModal, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.activeElement = document.activeElement;
    this.employeFlexibilitySubscription = ApplicationSharedData.getInstance().getEmployesFlexibility().filter(flex => !!flex).subscribe(
      flex => {
        this.data = [{ name: 'Flessibili', value: flex.flexible.length },
        { name: 'Non flessibili', value: flex.inflexible.length }];
        this.employesFexibility = flex;
        this.ref.markForCheck();
      }
    );
  }

  onSelect(event) {
    this.activeElement['focus'].apply(this.activeElement, []);
    const type = event.name === 'Flessibili' ? 0 : 1;
    const employes = (type === 1) ? this.employesFexibility.inflexible : this.employesFexibility.flexible;
    this.modalData = {
      title: type === 1 ? 'Dipendenti non flessibili' : 'Dipendenti flessibili',
      titleCss: type === 1 ? 'modal-header modal-header-red' : 'modal-header modal-header-yellow',
      listString: (type === 1) ? this.getInflexibleList(employes) : undefined,
      listArray: (type === 1) ? undefined : this.getFlexibleList(employes)
    };
    this.modal.open(this.modalWin, { size: 'lg', windowClass: 'animated bounceInRight' });
  }

  getInflexibleList(employes: Employe[]): string {
    return employes.map(e => e.surname + ' ' + e.name).join('\n');
  }

  getFlexibleList(employes: Employe[]): Employe[] {
    return employes;
  }

  ngOnDestroy() {
    if (this.employeFlexibilitySubscription) {
      this.employeFlexibilitySubscription.unsubscribe();
    }
  }

}

