import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerplayerDetailComponent } from './soccerplayer-detail.component';

describe('SoccerplayerDetailComponent', () => {
  let component: SoccerplayerDetailComponent;
  let fixture: ComponentFixture<SoccerplayerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccerplayerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerplayerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
