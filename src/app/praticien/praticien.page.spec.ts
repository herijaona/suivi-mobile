import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PraticienPage } from './praticien.page';

describe('PraticienPage', () => {
  let component: PraticienPage;
  let fixture: ComponentFixture<PraticienPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraticienPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PraticienPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
