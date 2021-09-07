import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPollAddComponent } from './user-poll-add.component';

describe('UserPollAddComponent', () => {
  let component: UserPollAddComponent;
  let fixture: ComponentFixture<UserPollAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPollAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPollAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
