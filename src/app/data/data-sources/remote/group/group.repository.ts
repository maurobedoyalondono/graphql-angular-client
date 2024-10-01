import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';

import { GroupEntity } from '../../../../domain/entities';
import { IGroupRepository } from '../../../../domain/repositories/igroup.repository';
import { Apollo, gql, QueryRef } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class GroupRepository implements IGroupRepository {
  private topLevelGroupsQuery: QueryRef<{groups: GroupEntity[]}, { }>;

    public baseUrl = 'https://run.mocky.io/v3/2a6db25e-9193-473e-9b2b-e1941ec81778';

    constructor(private http: HttpClient, private apollo: Apollo) {
      this.topLevelGroupsQuery = this.apollo.watchQuery({
        query: gql`query groups {
          groups {
            id
            name
            path
          }
        }`
      });
    }

    getAll(): Observable<GroupEntity[]> {
        //return this.topLevelGroupQuery.valueChanges.pipe(map(result => result.data.groups));
        return from(this.topLevelGroupsQuery.refetch()).pipe(map(result => result.data.groups));

        //return this.http.get<GroupEntity[]>(`${this.baseUrl}`);
    }

    /*
    createProject(project: ProjectEntity): Observable<Result> {
        return this.http.post<Result>(`${this.baseUrl}`, project);
    }

    getProject(id: string): Observable<ProjectEntity> {
        return this.http
            .get<ProjectEntity>(`${this.baseUrl}?id=${id}`);
    }

    updateProject(id: string, project: ProjectEntity): Observable<Result> {
        return this.http.put<Result>(`${this.baseUrl}?projectId=${id}`, project);
    }

    removeProject(id: string): Observable<Result> {
        return this.http.delete<Result>(`${this.baseUrl}?projectId=${id}`);
    }*/
}
