import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewRdvComponent } from './new-rdv.component';

describe('NewRdvComponent', () => {
  let component: NewRdvComponent;
  let fixture: ComponentFixture<NewRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRdvComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
