import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, map, Observable, of } from "rxjs";

import { GroupEntity, RepoEntity } from "../../../../domain/entities";
import { IGroupRepository } from "../../../../domain/repositories/igroup.repository";
import { Apollo, gql, QueryRef } from "apollo-angular";

@Injectable({ providedIn: "root" })
export class GroupRepository implements IGroupRepository {
  private topLevelSubgroupsQuery: QueryRef<{ groups: GroupEntity[] }, {}>;
  private topLevelGroupQuery: QueryRef<{ groups: GroupEntity[]; repos: RepoEntity[] },{}>;

  constructor(private apollo: Apollo) {
    this.topLevelSubgroupsQuery = this.apollo.watchQuery({
      query: gql`
        query groups {
          groups {
            id
            name
            path
          }
        }
      `,
    });

    this.topLevelGroupQuery = this.apollo.watchQuery({
      query: gql`
        query {
          groups {
            id
            name
            path
          }
          repos {
            id
            name
            path
          }
        }
      `,
    });
  }
  getOne(id?: string): Observable<GroupEntity> {
    return from(this.topLevelGroupQuery.refetch()).pipe(map((result) => result.data));
  }

  getAll(): Observable<GroupEntity[]> {
    return from(this.topLevelSubgroupsQuery.refetch()).pipe(
      map((result) => result.data.groups)
    );
  }
}
