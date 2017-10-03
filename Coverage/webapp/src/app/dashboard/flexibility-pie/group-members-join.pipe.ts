import { Pipe, PipeTransform } from '@angular/core';

import { Employe } from '../../shared/dto/employe';

@Pipe({name: 'groupMembersJoin'})
export class GroupMembersJoinPipe implements PipeTransform {
  transform(group: Array<Employe>): string {
    return group.map(em => em.name.charAt(0) + '. ' + em.surname).join(', ');
  }
}
