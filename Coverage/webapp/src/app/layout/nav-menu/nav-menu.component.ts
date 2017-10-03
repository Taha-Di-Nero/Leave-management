import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { CurrentNode, NavigationNode } from './nav-menu.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-nav-menu',
  template: `
  <app-nav-item *ngFor="let node of filteredNodes" [node]="node" [selectedNodes]="currentNode?.nodes" [isWide]="isWide"
  (action)="nodeClicked($event)">
  </app-nav-item>`
})
export class NavMenuComponent {
  @Input() currentNode: CurrentNode;
  @Input() isWide = false;
  @Input() nodes: NavigationNode[];

  @Output() action: EventEmitter<NavigationNode> = new EventEmitter();

  get filteredNodes() { return this.nodes ? this.nodes.filter(n => !n.hidden) : []; }

  nodeClicked(node: NavigationNode) {
    this.action.emit(node);
  }
}
