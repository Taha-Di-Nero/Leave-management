import { MenuItemIds } from '../../shared/enums';

export interface NavigationNode {
  id?: MenuItemIds;
  title?: string;
  tooltip?: string;
  hidden?: boolean;
  children?: NavigationNode[];
}

export interface CurrentNode {
  id: MenuItemIds;
  view: string;
  nodes: NavigationNode[];
}
