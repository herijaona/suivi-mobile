import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssocPraticiensPage } from './assoc-praticiens.page';

describe('AssocPraticiensPage', () => {
  let component: AssocPraticiensPage;
  let fixture: ComponentFixture<AssocPraticiensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssocPraticiensPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssocPraticiensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
