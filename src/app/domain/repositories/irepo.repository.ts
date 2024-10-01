import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RepoEntity } from '../entities';

@Injectable({ providedIn: 'root' })
export abstract class IRepoRepository {

    abstract all(): Observable<RepoEntity[]>;
}
