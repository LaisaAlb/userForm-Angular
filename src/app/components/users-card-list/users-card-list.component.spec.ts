import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCardListComponent } from './users-card-list.component';

describe('UsersCardListComponent', () => {
  let component: UsersCardListComponent;
  let fixture: ComponentFixture<UsersCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
