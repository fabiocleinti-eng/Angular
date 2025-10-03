import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService)
  private router = inject(Router);

  loading = signal(false);
  error = signal<string | null>(null);

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]]
  });


  async onSubmit() {
    if (this.form.invalid) {
      return;
    } 

    this.loading.set(true);
    this.error.set(null);

    try{
      const { email, senha } = this.form.getRawValue();
      await this.authService.login({ email, senha });
      
      
      this.router.navigate(['/lista-usuarios']); 

    } catch(err: any) {
      
      if (err.status === 401) {
        this.error.set('E-mail ou senha inválidos.');
      } else {
        this.error.set(err.message || 'Erro ao realizar login');
      }
    } finally {
      this.loading.set(false);
    }
  } 

}