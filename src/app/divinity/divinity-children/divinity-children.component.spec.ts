import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivinityChildrenComponent } from './divinity-children.component';

describe('DivinityChildrenComponent', () => {
  let component: DivinityChildrenComponent;
  let fixture: ComponentFixture<DivinityChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivinityChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivinityChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
