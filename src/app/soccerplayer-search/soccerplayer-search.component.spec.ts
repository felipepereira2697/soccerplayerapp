import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerplayerSearchComponent } from './soccerplayer-search.component';

describe('SoccerplayerSearchComponent', () => {
  let component: SoccerplayerSearchComponent;
  let fixture: ComponentFixture<SoccerplayerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccerplayerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerplayerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
