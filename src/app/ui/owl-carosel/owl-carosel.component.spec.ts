import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlCaroselComponent } from './owl-carosel.component';

describe('OwlCaroselComponent', () => {
  let component: OwlCaroselComponent;
  let fixture: ComponentFixture<OwlCaroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwlCaroselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwlCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
