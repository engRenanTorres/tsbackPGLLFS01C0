import { Router, Request, Response } from 'express';
import UsuarioRepositorio from './infra/usuarioRepositorio';
import { CriarUsuarioDTO } from './usuarioDTO';

class UsuarioController {
  private readonly usuarioRepositorio: UsuarioRepositorio;
  public readonly router: Router = Router();

  constructor (usuarioRepositorio: UsuarioRepositorio) {
    this.usuarioRepositorio = usuarioRepositorio;
    this.routes();
  }

  routes () {
    this.router.get('/', this.buscarTodos.bind(this));
    this.router.get('/:id', this.buscarPorId.bind(this));
    this.router.post('/', this.criar.bind(this));
  }

  buscarTodos (req: Request, res: Response) {
    const usarios = this.usuarioRepositorio.buscaTodos();
    res.json(usarios);
  }

  // http://localhost:3000/usuario?id=2
  buscarPorId (req: Request, res: Response) {
    const id = req.params.id ?? 1;
    const usarios = this.usuarioRepositorio.buscaPorId(+id);
    res.json(usarios);
  }

  criar (req: Request, res: Response) {
    const dadosUsuario: CriarUsuarioDTO = req.body;
    this.usuarioRepositorio.criar(dadosUsuario);
    const usuarios = this.usuarioRepositorio.buscaTodos();
    res.json(usuarios);
  }
}

export default UsuarioController;
