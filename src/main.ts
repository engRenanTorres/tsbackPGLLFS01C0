/* eslint-disable no-unused-vars */
// CRUD - Create Read(Ler) Update Delete
import express, { Request, Response } from 'express';
import { buscarUsuarios, buscarUsuarioPorId, criarUsuario } from './dominio/usuarioServico';
import { UsarioSchema } from './infra/usuarioSchema';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// GET - Leitura / Post - Escreve, Criar / PUT - Atualizar / DELETE - Delete
app.get('/', (req: Request, res: Response) => {
  res.send('Bem vindo. Esta é a sua primeira API');
});

app.get('/usuarios', (req: Request, res: Response) => {
  const usarios = buscarUsuarios();
  res.send(usarios);
});

// http://localhost:3000/usuario?id=2
app.get('/usuario', (req: Request, res: Response) => {
  const id = req.query.id ?? 1;
  console.log('query nome é ', req.query.nome);
  const usarios = buscarUsuarioPorId(+id);
  res.send(usarios);
});

const jsonParser = bodyParser.json();

app.post('/usuario', jsonParser, (req: Request, res: Response) => {
  const dadosUsuario: UsarioSchema = req.body;
  criarUsuario(dadosUsuario);
  const usuarios = buscarUsuarios();
  res.send(usuarios);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: http://localhost:${port}`);
});
