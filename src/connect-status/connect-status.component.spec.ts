import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectStatusComponent } from './connect-status.component';

describe('ConnectStatusComponent', () => {
  let component: ConnectStatusComponent;
  let fixture: ComponentFixture<ConnectStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
