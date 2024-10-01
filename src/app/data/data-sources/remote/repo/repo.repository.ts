import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';

import { IRepoRepository } from '../../../../domain/repositories/irepo.repository';
import { RepoEntity } from '../../../../domain/entities';
import { Apollo, gql, QueryRef } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class RepoRepository implements IRepoRepository {
  private topLevelReposQuery: QueryRef<{repos: RepoEntity[]}, { }>;

    constructor(private http: HttpClient, private apollo: Apollo) {
      this.topLevelReposQuery = this.apollo.watchQuery({
        query: gql`query repos {
          repos {
            id
            name
            path
          }
        }`
      });
    }

    all(): Observable<RepoEntity[]> {
      return from(this.topLevelReposQuery.refetch()).pipe(map(result => result.data.repos));
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
