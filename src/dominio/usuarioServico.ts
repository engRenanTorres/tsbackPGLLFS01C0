/* eslint-disable no-unused-vars */
import UsarioRepositorio from '../infra/usuarioRepositorio';
import { UsarioSchema } from '../infra/usuarioSchema';

export function buscarUsuarioPorId (id: number): UsarioSchema | undefined {
  const usuarioRepositorio = new UsarioRepositorio();
  const usario = usuarioRepositorio.buscaPorId(id);
  if (usario) {
    return usario;
  }
  throw new Error('Usario nao encontrado');
}

export function buscarUsuarios (): UsarioSchema[] {
  const usuarioRepositorio = new UsarioRepositorio();
  const usuarios = usuarioRepositorio.buscaTodos();
  return usuarios;
}

export function criarUsuario (usuario: UsarioSchema): void {
  const usuarioRepositorio = new UsarioRepositorio();
  usuarioRepositorio.criar(usuario);
}

// const novoUsuario = new UsuarioModel(1234, 'Alberto', true);

/* criarUsuario({
  ...novoUsuario
}); */

// const usuario = buscarUsuarioPorId(1);

// console.log('o usuario buscado foi ' + JSON.stringify(usuario));
// console.log('usuarios', buscarUsuarios());
