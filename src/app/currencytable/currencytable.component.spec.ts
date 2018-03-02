import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencytableComponent } from './currencytable.component';

describe('CurrencytableComponent', () => {
  let component: CurrencytableComponent;
  let fixture: ComponentFixture<CurrencytableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencytableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
