import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SslTlsComponent } from './ssl-tls.component';

describe('SslTlsComponent', () => {
  let component: SslTlsComponent;
  let fixture: ComponentFixture<SslTlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SslTlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SslTlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
