export interface Usuario {
  id: number;
  nome: string;
  email: string;
  dataNascimento: string;
  rg: string;
  cpf: string;
  createdAt: string;
  updatedAt: string;
  enderecos: any[];
  contatos: any[];
}