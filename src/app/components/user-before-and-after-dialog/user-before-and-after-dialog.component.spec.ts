import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBeforeAndAfterDialogComponent } from './user-before-and-after-dialog.component';

describe('UserBeforeAndAfterDialogComponent', () => {
  let component: UserBeforeAndAfterDialogComponent;
  let fixture: ComponentFixture<UserBeforeAndAfterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserBeforeAndAfterDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBeforeAndAfterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
