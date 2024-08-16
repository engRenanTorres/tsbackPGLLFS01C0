/* eslint-disable no-unused-vars */
import { UsuarioModel } from './entidades/usuarios';

export type CriarUsuarioDTO = Omit<UsuarioModel, 'id' >

export type AtualizarUsuarioDTO = Partial<CriarUsuarioDTO>
