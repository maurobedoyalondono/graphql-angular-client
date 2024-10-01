import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Result } from '../../../../core/types/types';
import { Param } from '../../../../core/params/param.payload';
import { NoParam } from '../../../../core/params/no-param.paylod';
import { RepoRequest } from '../../../requests/repo.request';
import { IRepoInteractor } from '../../contracts/irepo.interactor';
import { GetManyRepoUsecase } from '../../../../domain/usecases/repo-usecases/get-many-repo.usecase';


@Injectable({ providedIn: 'root' })
export class RepoInteractor extends IRepoInteractor {

    constructor(
        private getManyRepoUsecase: GetManyRepoUsecase
    ) {
        super();
    }


    public getMany(): Observable<RepoRequest[]> {
        return this.getManyRepoUsecase.execute(new NoParam());
    }
}
