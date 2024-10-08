import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { RepoRequest } from './data/requests/repo.request';
import { IRepoInteractor } from './data/interactors/contracts/irepo.interactor';
import { CommonModule } from '@angular/common';
import { IGroupInteractor } from './data/interactors/contracts/igroup.interactor';
import { GroupRequest } from './data/requests/project.request';
import { FTVaultHeaderComponent } from './presenter/components/layouts/ftvault-header/ftvault-header.component';
import { FTVaultLeftSideBarComponent } from './presenter/components/layouts/ftvault-left-side-bar/ftvault-left-side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FTVaultHeaderComponent, FTVaultLeftSideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FTVault 2.0 App';

  constructor() {

  }

  ngOnInit(): void {

  }
}
