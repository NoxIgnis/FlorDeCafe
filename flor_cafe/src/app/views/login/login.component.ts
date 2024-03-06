import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonComponent } from '../../components/button/button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent, ReactiveFormsModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  loading = signal(false);

  constructor(private service: LoginService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    this.loading.set(true);
    if (this.loginForm.valid) {
      this.service
        .sendData({
          email: this.loginForm.value.email,
          password: this.loginForm.value.password,
        })
        .subscribe({
          next: () => {
            this.loginForm.reset();
            this.loading.set(false);
          },
        });
    }
  }
}
