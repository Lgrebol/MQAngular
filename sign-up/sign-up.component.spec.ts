import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Has title SignUp', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("h1")?.textContent).toBe('Sign Up');
  });

  it('Has label for username', () => {
    const compiled:HTMLElement = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("label")?.textContent).toBe('Username');
  });
  
  it('Has label for Email', () => {
    const compiled:HTMLElement = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll("label")[1]?.textContent).toBe('Email');
  });

  it('Has label for Password', () => {
    const compiled:HTMLElement = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll("label")[2]?.textContent).toBe('Password');
  });
});
