import { NavigationNode } from './nav-menu.model';
import { MenuItemIds } from '../../shared/enums';

export const sideNavNodes: NavigationNode[] = [
    {
        'id': MenuItemIds.Chiusure,
        'title': 'Chiusure annuale',
        'tooltip': 'Chiusure annuale'
    },
    {
        'id': MenuItemIds.Presenze,
        'title': 'Periodi presenze obbligatorie',
        'tooltip': 'Periodi presenze obbligatorie'
    },
    {
        'title': 'Approvazione ferie',
        'tooltip': 'Approvazione ferie',
        'children': [
            {
                'id': MenuItemIds.AddedLeaves,
                'title': 'Ferie aggiunte',
                'tooltip': 'Ferie aggiunte'
            },
            {
                'id': MenuItemIds.RemovedLeaves,
                'title': 'Ferie rimosse',
                'tooltip': 'Ferie rimosse'
            }]
    }];
