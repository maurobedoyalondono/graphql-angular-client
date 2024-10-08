import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoParam } from '../../../core/params/no-param.paylod';
import { Usecase } from '../../../core/contracts/usecase.contract';
import { GroupEntity } from '../../entities';
import { IGroupRepository } from '../../repositories/igroup.repository';
import { Param } from '../../../core/params/param.payload';

@Injectable({ providedIn: 'root' })
export class GetOneGroupUsecase implements Usecase<Param<string>, Observable<GroupEntity>> {

    constructor(private iGroupRepository: IGroupRepository) { }

    execute(param: Param<string>): Observable<GroupEntity> {
        return this.iGroupRepository.getOne(param.payload);
    }
}
