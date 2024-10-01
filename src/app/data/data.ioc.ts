import { Provider } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { GetManyRepoUsecase } from "../domain/usecases/repo-usecases/get-many-repo.usecase";
import { GetManyGroupUsecase } from "../domain/usecases/group-usecases/get-many-group.usecase";

import { IRepoInteractor } from "./interactors/contracts/irepo.interactor";
import { RepoInteractor } from "./interactors/implementations/repo/repo.interactor";

import { IGroupInteractor } from "./interactors/contracts/igroup.interactor";
import { GroupInteractor } from "./interactors/implementations/group/group.interactor";

import { RepoRepository } from "./data-sources/remote/repo/repo.repository";
import { GroupRepository } from "./data-sources/remote/group/group.repository";
import { Apollo } from "apollo-angular";

export const DATA_REPO_IOC: Provider[] = [
  {
    provide: IRepoInteractor,
    useClass: RepoInteractor
  },
  {
    provide: IGroupInteractor,
    useClass: GroupInteractor
  },
  {
    deps: [HttpClient, Apollo],
    provide: RepoRepository,
    useFactory: (http: HttpClient, apollo: Apollo) => new RepoRepository(http, apollo)
  },
  {
    deps: [HttpClient, Apollo],
    provide: GroupRepository,
    useFactory: (http: HttpClient, apollo: Apollo) => new GroupRepository(http, apollo)
  },
  {
    deps: [RepoRepository],
    provide: GetManyRepoUsecase,
    useFactory: (repository: RepoRepository) => new GetManyRepoUsecase(repository)
  },
  {
    deps: [GroupRepository],
    provide: GetManyGroupUsecase,
    useFactory: (groupRepository: GroupRepository) => new GetManyGroupUsecase(groupRepository)
  }
]
