import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckRolesPage } from './check-roles.page';

describe('CheckRolesPage', () => {
  let component: CheckRolesPage;
  let fixture: ComponentFixture<CheckRolesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckRolesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckRolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
