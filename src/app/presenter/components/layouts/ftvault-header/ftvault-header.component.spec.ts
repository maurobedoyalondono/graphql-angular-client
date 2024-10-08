import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTVaultHeaderComponent } from './ftvault-header.component';

describe('FTVaultHeaderComponent', () => {
  let component: FTVaultHeaderComponent;
  let fixture: ComponentFixture<FTVaultHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FTVaultHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FTVaultHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
