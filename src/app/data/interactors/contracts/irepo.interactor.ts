import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Result } from '../../../core/types/types';
import { RepoRequest } from '../../requests/repo.request';



@Injectable({ providedIn: 'root', })
export abstract class IRepoInteractor {

    // abstract save(project: RepoRequest): Observable<Result>;

    abstract getMany(): Observable<RepoRequest[]>;

    // abstract getOne(slug: string): Observable<RepoRequest>

    // abstract create(project: RepoRequest): Observable<Result>;

    // abstract update(project: RepoRequest): Observable<Result>;

    // abstract delete(slug: string): Observable<Result>;
}
