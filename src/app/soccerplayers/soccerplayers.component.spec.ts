import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerplayersComponent } from './soccerplayers.component';

describe('SoccerplayersComponent', () => {
  let component: SoccerplayersComponent;
  let fixture: ComponentFixture<SoccerplayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccerplayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
