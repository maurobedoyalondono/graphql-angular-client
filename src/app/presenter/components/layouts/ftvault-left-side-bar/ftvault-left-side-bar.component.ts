import { Component } from '@angular/core';
import { FTVaultNavigationTreeComponent } from '../../shared/ftvault-navigation-tree/ftvault-navigation-tree.component';

@Component({
  selector: 'app-ftvault-left-side-bar',
  standalone: true,
  imports: [FTVaultNavigationTreeComponent],
  templateUrl: './ftvault-left-side-bar.component.html',
  styleUrl: './ftvault-left-side-bar.component.scss'
})
export class FTVaultLeftSideBarComponent {
  
}
