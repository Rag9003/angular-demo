import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitDataComponent } from './git-data.component';

describe('GitDataComponent', () => {
  let component: GitDataComponent;
  let fixture: ComponentFixture<GitDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
