import path from 'path';
import fs from 'fs';
import DBSchema from './dbSchema';
import { UsarioSchema } from './usuarioSchema';

// SQLite

class UsarioRepositorio {
  private readonly caminhoArquivo: string;

  constructor () {
    this.caminhoArquivo = path.join(__dirname, 'fakeDB.json');
  }

  private acessoBD (): DBSchema {
    const bdPuro = fs.readFileSync(this.caminhoArquivo, 'utf-8');
    return JSON.parse(bdPuro);
  }

  private reescreverArquivo (DBAtualizado: DBSchema):boolean {
    try {
      fs.writeFileSync(this.caminhoArquivo, JSON.stringify(DBAtualizado));
      return true;
    } catch {
      return false;
    }
  }

  public buscaTodos (): UsarioSchema[] {
    const bd = this.acessoBD();
    return bd.users;
  }

  public buscaPorId (id: number): UsarioSchema | undefined {
    const bd = this.acessoBD();
    const usuario = bd.users.find((usuario) => usuario.id === id);
    return usuario;
  }

  public criar (usario: UsarioSchema) {
    const bd = this.acessoBD();
    bd.users.push(usario);
    this.reescreverArquivo(bd);
  }
}

export default UsarioRepositorio;
