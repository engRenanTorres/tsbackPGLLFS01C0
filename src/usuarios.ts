export type Usario = {
  id: number;
  nome: string;
  ativo: boolean,
  horasAulas?: bigint,
  contato?: Record<string, unknown>
}

export class UsuarioClasse {
  id: number;
  nome: string;
  ativo: boolean;

  constructor (
    id: number,
    nome: string,
    ativo: boolean
  ) {
    this.id = id;
    this.nome = nome;
    this.ativo = ativo;
  }
}

const usuarios: Usario[] = [
  {
    id: 1,
    nome: 'Renan',
    ativo: true,
    horasAulas: 8987223n,
    contato: {
      telefone: '0215487865456'
    }
  },
  {
    id: 2,
    nome: 'Jessica',
    ativo: false,
    horasAulas: 67384n,
    contato: { telefone: '0224878654312' }
  }
];

export default usuarios;
