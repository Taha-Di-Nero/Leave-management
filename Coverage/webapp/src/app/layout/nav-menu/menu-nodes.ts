import { NavigationNode } from './nav-menu.model';
import { MenuItemIds } from '../../shared/enums';

export const sideNavNodes: NavigationNode[] = [
    {
        'id': MenuItemIds.Employes,
        'title': 'Gestione dipendenti',
        'tooltip': 'Gestione dipendenti'
    },
    {
        'id': MenuItemIds.Shutdowns,
        'title': 'Chiusure annuale',
        'tooltip': 'Chiusure annuale'
    },
    {
        'id': MenuItemIds.presences,
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
