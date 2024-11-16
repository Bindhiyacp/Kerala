import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DusComponent } from './dus.component';

describe('DusComponent', () => {
  let component: DusComponent;
  let fixture: ComponentFixture<DusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
