import { Router } from 'express';
import UsuarioController from './usuario-controller';
import UsuarioRepositorio from './infra/usuarioRepositorio';

const routes = Router();

const usuarioRepositorio = new UsuarioRepositorio();
const usuarioController = new UsuarioController(usuarioRepositorio);

routes.use('/usuarios', usuarioController.router);

export default routes;
