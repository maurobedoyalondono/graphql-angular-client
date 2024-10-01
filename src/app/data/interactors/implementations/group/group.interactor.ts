import { Observable } from "rxjs";
import { GroupRequest } from "../../../requests/project.request";
import { IGroupInteractor } from "../../contracts/igroup.interactor";
import { GetManyGroupUsecase } from "../../../../domain/usecases/group-usecases/get-many-group.usecase";
import { NoParam } from "../../../../core/params/no-param.paylod";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class GroupInteractor extends IGroupInteractor {

  constructor(
    private getManyGroupUsecase: GetManyGroupUsecase
) {
    super();
}

  public getMany(): Observable<GroupRequest[]> {
    return this.getManyGroupUsecase.execute(new NoParam());
  }

  /*
  async getGroupDetails(id: number): Promise<Group> {
    const group = await this.groupRepository.getGroupById(id);
    return await this.populateGroupRepositoriesAndSubGroups([group])[0];
  }

  private async populateGroupRepositoriesAndSubGroups(groups: Group[]): Promise<Group[]> {
    // Assuming groupRepository.getGroupById also returns repositories and subGroups
    return await Promise.all(
      groups.map(async group => {
        group.subGroups = await Promise.all(group.subGroups.map(async subGroup => {
return await this.getGroupDetails(subGroup.id);
        }));
        return group;
      })
    );
  }
  */
}
