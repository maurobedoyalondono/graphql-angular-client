import { RepoEntity } from "./repo.entity";

export class GroupEntity {
  id?: number;
  name?: string;
  description?: string;
  path?: string;
  fullpath?: string;
  members?: number[];
  repositories?: RepoEntity[];
  subGroups?: GroupEntity[];
}
