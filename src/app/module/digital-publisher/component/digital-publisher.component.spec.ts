import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalPublisherComponent } from './digital-publisher.component';

describe('DigitalPublisherComponent', () => {
  let component: DigitalPublisherComponent;
  let fixture: ComponentFixture<DigitalPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalPublisherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
