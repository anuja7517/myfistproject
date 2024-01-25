import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillssetComponent } from './skillsset.component';

describe('SkillssetComponent', () => {
  let component: SkillssetComponent;
  let fixture: ComponentFixture<SkillssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillssetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
