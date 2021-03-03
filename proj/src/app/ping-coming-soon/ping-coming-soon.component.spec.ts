import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PingComingSoonComponent } from './ping-coming-soon.component';

describe('PingComingSoonComponent', () => {
  let component: PingComingSoonComponent;
  let fixture: ComponentFixture<PingComingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PingComingSoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PingComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
