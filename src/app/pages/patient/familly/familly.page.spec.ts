import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FamillyPage } from './familly.page';

describe('FamillyPage', () => {
  let component: FamillyPage;
  let fixture: ComponentFixture<FamillyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamillyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FamillyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
