import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBranchManagerComponent } from './create-branch-manager.component';

describe('CreateBranchManagerComponent', () => {
  let component: CreateBranchManagerComponent;
  let fixture: ComponentFixture<CreateBranchManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBranchManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBranchManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
