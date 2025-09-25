import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);

  form = this.fb.group({
    email: ['', [Validators.required]],
    senha: ['', [Validators.required]]
  });

  async onSubmit(): Promise<void>{
    if(this.form.invalid) return;

    try{
      const {email, senha} = this.form.getRawValue();

      if(email == null || senha == null){
        alert("Email e senha são obrigatórios.");
        return;
      }

      var token = await this.auth.login({email, senha});
      alert(token);
    } catch(e: any){
      alert(e.error.message);
    }
  }
}
