import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SravanitableComponent } from './sravanitable.component';

describe('SravanitableComponent', () => {
  let component: SravanitableComponent;
  let fixture: ComponentFixture<SravanitableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SravanitableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SravanitableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
