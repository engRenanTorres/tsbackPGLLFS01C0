/* eslint-disable no-unused-vars */
// CRUD - Create Read(Ler) Update Delete

import usuarios, { Usario, UsuarioClasse } from './usuarios';

function buscarUsuarioPorId (id: number): Usario | undefined {
  const usario = usuarios.find((usuario) => usuario.id === id);
  if (usario) {
    return usario;
  }
  throw new Error('Usario nao encontrado');
}

function buscarUsuarios (): Usario[] {
  return usuarios;
}

function criarUsuario (usuario: Usario): void {
  usuarios.push(usuario);
  console.log(usuarios);
}

function printaTela (): void {
  console.log('printeis');
}

const novoUsuario = new UsuarioClasse(1234, 'Alberto', true);

criarUsuario({
  ...novoUsuario
});

const usuario = buscarUsuarioPorId(1);

console.log(usuario);
// console.log('usuarios', buscarUsuarios());
