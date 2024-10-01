import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { RepoRequest } from './data/requests/repo.request';
import { IRepoInteractor } from './data/interactors/contracts/irepo.interactor';
import { CommonModule } from '@angular/common';
import { IGroupInteractor } from './data/interactors/contracts/igroup.interactor';
import { GroupRequest } from './data/requests/project.request';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FTVault 2.0 App';

  public repos$?: Observable<RepoRequest[]>;
  public groups$?: Observable<GroupRequest[]>;

  constructor(private repoInteractor: IRepoInteractor, private groupInteractor: IGroupInteractor) {

  }

  ngOnInit(): void {
    this.repos$ = this.repoInteractor.getMany();
    this.groups$ = this.groupInteractor.getMany();
  }
}
