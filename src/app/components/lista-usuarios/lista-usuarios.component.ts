import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario.models'; // <-- Caminho corrigido
import { UsuarioService } from '../../services/usuario.service'; // <-- Caminho corrigido
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.ts'
})
export class ListaUsuariosComponent implements OnInit {
  private usuarioService = inject(UsuarioService);

  usuarios: Usuario[] = [];
  error: string | null = null;

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (err) => {
        this.error = 'Falha ao carregar a lista de usuários. Verifique se você está autenticado.';
        console.error(err);
      }
    });
  }
}