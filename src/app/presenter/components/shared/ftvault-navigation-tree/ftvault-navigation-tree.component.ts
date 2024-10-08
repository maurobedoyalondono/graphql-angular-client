import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { GroupRequest } from '../../../../data/requests/project.request';
import { IGroupInteractor } from '../../../../data/interactors/contracts/igroup.interactor';

@Component({
  selector: 'app-ftvault-navigation-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ftvault-navigation-tree.component.html',
  styleUrl: './ftvault-navigation-tree.component.scss'
})
export class FTVaultNavigationTreeComponent implements OnInit {
  public group$?: Observable<GroupRequest>;

  constructor(private groupInteractor: IGroupInteractor) {

  }
  ngOnInit(): void {
    this.group$ = this.groupInteractor.getOne();
  }
}
