import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTVaultHomeComponent } from './ftvault-home.component';

describe('FTVaultHomeComponent', () => {
  let component: FTVaultHomeComponent;
  let fixture: ComponentFixture<FTVaultHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FTVaultHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FTVaultHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
