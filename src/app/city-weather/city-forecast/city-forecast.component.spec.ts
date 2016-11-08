/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CityForecastComponent } from './city-forecast.component';

describe('CityForecastComponent', () => {
  let component: CityForecastComponent;
  let fixture: ComponentFixture<CityForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
