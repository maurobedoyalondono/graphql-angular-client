import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupEntity } from '../entities';

@Injectable({ providedIn: 'root' })
export abstract class IGroupRepository {

    abstract getAll(): Observable<GroupEntity[]>;
}
