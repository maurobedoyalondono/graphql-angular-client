import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTVaultNavigationTreeComponent } from './ftvault-navigation-tree.component';

describe('FTVaultNavigationTreeComponent', () => {
  let component: FTVaultNavigationTreeComponent;
  let fixture: ComponentFixture<FTVaultNavigationTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FTVaultNavigationTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FTVaultNavigationTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
