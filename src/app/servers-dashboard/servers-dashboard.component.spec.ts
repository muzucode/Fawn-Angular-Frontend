import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersDashboardComponent } from './servers-dashboard.component';

describe('ServersDashboardComponent', () => {
  let component: ServersDashboardComponent;
  let fixture: ComponentFixture<ServersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
