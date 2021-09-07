import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPollListComponent } from './user-poll-list.component';

describe('UserPollListComponent', () => {
  let component: UserPollListComponent;
  let fixture: ComponentFixture<UserPollListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPollListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
