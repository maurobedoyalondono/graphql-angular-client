import { generate } from "rxjs";

export class RepoEntity {
    id?: string;
    name?: string;
    path?: string;
    description?: string;
    fullName?: string;
    fullPath?: string;
    parentPath?: string;
    defaultBranch?: string;
    lfsEnabled?: boolean;
    createdAt?: Date;
    lastActivityAt?: Date;
}
