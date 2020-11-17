import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssocPatientsPage } from './assoc-patients.page';

describe('AssocPatientsPage', () => {
  let component: AssocPatientsPage;
  let fixture: ComponentFixture<AssocPatientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssocPatientsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssocPatientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
