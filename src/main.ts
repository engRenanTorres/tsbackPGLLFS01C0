class Funcionario {
  nome: any;
  constructor (nome: string) {
    this.nome = nome;
  }

  getNome () {
    return this.nome;
  }
}

const professor = new Funcionario('Renan');

console.log(professor.getNome());
