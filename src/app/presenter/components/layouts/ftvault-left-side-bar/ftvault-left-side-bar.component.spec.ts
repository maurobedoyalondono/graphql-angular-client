import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTVaultLeftSideBarComponent } from './ftvault-left-side-bar.component';

describe('FTVaultLeftSideBarComponent', () => {
  let component: FTVaultLeftSideBarComponent;
  let fixture: ComponentFixture<FTVaultLeftSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FTVaultLeftSideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FTVaultLeftSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
