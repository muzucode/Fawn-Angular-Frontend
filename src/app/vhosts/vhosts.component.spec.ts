import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhostsComponent } from './vhosts.component';

describe('VhostsComponent', () => {
  let component: VhostsComponent;
  let fixture: ComponentFixture<VhostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VhostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VhostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
