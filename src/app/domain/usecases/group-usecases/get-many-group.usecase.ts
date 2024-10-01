import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoParam } from '../../../core/params/no-param.paylod';
import { Usecase } from '../../../core/contracts/usecase.contract';
import { GroupEntity } from '../../entities';
import { IGroupRepository } from '../../repositories/igroup.repository';

@Injectable({ providedIn: 'root' })
export class GetManyGroupUsecase implements Usecase<NoParam, Observable<GroupEntity[]>> {

    constructor(private iGroupRepository: IGroupRepository) { }

    execute(payload: NoParam): Observable<GroupEntity[]> {
        return this.iGroupRepository.getAll();
    }

}
