import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service'; // <-- Caminho corrigido
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private usuarioService = inject(UsuarioService);

  form = this.fb.nonNullable.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
    dataNascimento: ['', Validators.required],
    cpf: ['', Validators.required],
    rg: ['', Validators.required],
  });

  async onSubmit() {
    if (this.form.invalid) {
      alert("Formulário Inválido. Preencha todos os campos.");
      return;
    }

    const novoUsuario = this.form.getRawValue();

    try {
      await firstValueFrom(this.usuarioService.criar(novoUsuario));
      alert('Usuário criado com sucesso! Você será redirecionado para a tela de login.');
      this.router.navigate(['/login']);
    } catch (error: any) {
      console.error('Erro ao criar usuário:', error);
      const erroMsg = error.error?.message || error.message || 'Verifique os dados e tente novamente.';
      alert(`Erro ao criar usuário: ${erroMsg}`);
    }
  }
}