import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoParam } from '../../../core/params/no-param.paylod';
import { Usecase } from '../../../core/contracts/usecase.contract';
import { RepoEntity } from '../../entities';
import { IRepoRepository } from '../../repositories/irepo.repository';

@Injectable({ providedIn: 'root' })
export class GetManyRepoUsecase implements Usecase<NoParam, Observable<RepoEntity[]>> {

    constructor(private iRepoRepository: IRepoRepository) { }

    execute(payload: NoParam): Observable<RepoEntity[]> {
        return this.iRepoRepository.all();
    }

}
