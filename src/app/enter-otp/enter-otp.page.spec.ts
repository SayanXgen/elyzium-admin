import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnterOtpPage } from './enter-otp.page';

describe('EnterOtpPage', () => {
  let component: EnterOtpPage;
  let fixture: ComponentFixture<EnterOtpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
