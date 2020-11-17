import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealizeComponent } from './realize.component';

describe('RealizeComponent', () => {
  let component: RealizeComponent;
  let fixture: ComponentFixture<RealizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
