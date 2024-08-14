/* eslint-disable no-unused-vars */
// CRUD - Create Read(Ler) Update Delete
import express, { Request, Response } from 'express';
import routes from './routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', routes);

// GET - Leitura / Post - Escreve, Criar / PUT - Atualizar / DELETE - Delete
app.get('/', (req: Request, res: Response) => {
  res.json('Bem vindo. Esta é a sua primeira API');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: http://localhost:${port}`);
});
