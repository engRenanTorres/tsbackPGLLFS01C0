import { Router, Request, Response } from 'express';
import UsuarioRepositorio from './infra/usuarioRepositorio';
import { AtualizarUsuarioDTO, CriarUsuarioDTO } from './usuarioDTO';
import { body, param, validationResult } from 'express-validator';

class UsuarioController {
  private readonly usuarioRepositorio: UsuarioRepositorio;
  public readonly router: Router = Router();

  constructor (usuarioRepositorio: UsuarioRepositorio) {
    this.usuarioRepositorio = usuarioRepositorio;
    this.routes();
  }

  routes () {
    this.router.get('/', this.buscarTodos.bind(this));
    this.router.get('/:id',
      [
        param('id').isNumeric().withMessage('O id tem que ser um numero')
      ]
      , this.buscarPorId.bind(this));
    this.router.post('/',
      [
        body('nome')
          .exists().withMessage('O campo nome é obrigatório')
          .isString().withMessage('O campo nome tem que ser uma string'),
        body('ativo')
          .exists().withMessage('O campo ativo é obrigatório')
          .isBoolean().withMessage('O campo ativo tem que ser um boolean')
      ],
      this.criar.bind(this));
    this.router.patch('/:id', this.atualizar.bind(this));
    this.router.delete('/:id', this.deletar.bind(this));
  }

  buscarTodos (req: Request, res: Response) {
    const usarios = this.usuarioRepositorio.buscaTodos();
    res.json(usarios);
  }

  // http://localhost:3000/usuario?id=2
  buscarPorId (req: Request, res: Response) {
    const errosValidacao = validationResult(req);

    if (!errosValidacao.isEmpty()) {
      return res.status(400).json({ erros: errosValidacao.array() });
    }

    const id = req.params.id ?? 1;
    const usarios = this.usuarioRepositorio.buscaPorId(+id);
    res.json(usarios);
  }

  criar (req: Request, res: Response) {
    const errosValidacao = validationResult(req);

    if (!errosValidacao.isEmpty()) {
      return res.status(400).json({ erros: errosValidacao.array() });
    }

    const dadosUsuario: CriarUsuarioDTO = req.body;
    this.usuarioRepositorio.criar(dadosUsuario);
    const usuarios = this.usuarioRepositorio.buscaTodos();
    res.status(201).json(usuarios);
  }

  atualizar (req: Request, res: Response) {
    const id = req.params.id;
    const dadosNovos: AtualizarUsuarioDTO = req.body;

    this.usuarioRepositorio.atualizar(+id, dadosNovos);
    res.json('Usuario atualizado com sucesso!');
  }

  deletar (req: Request, res: Response) {
    const id = req.params.id;
    this.usuarioRepositorio.deletar(+id);
    res.json('Usuario deletado com sucesso!');
  }
}

export default UsuarioController;
