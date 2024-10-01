import { Observable } from "rxjs";
import { GroupRequest } from "../../requests/project.request";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root', })
export abstract class IGroupInteractor {
  abstract getMany(): Observable<GroupRequest[]>;
  // abstract getGroupById(id: number): Observable<GroupRequest>;
}
