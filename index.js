// index.js — ponto de entrada da aplicação
// responsabilidade: subir o servidor Express e montar as rotas

import express from 'express';
import cors from 'cors'
import usuariosRoutes from './src/routes/usuariosRoutes.js';
import tarefasRoutes from './src/routes/tarefasRoutes.js';

const app = express();
const PORT = 3000;

// middleware nativo do Express para parsear JSON no corpo das requisições
app.use(cors('http://127.0.0.1:5500/')); //ip interno da minha máq
app.use(express.json()); //fala pra API aceitar qualquer conexão interna desse endereço

// cada grupo de rotas é montado sob um prefixo
app.use('/usuarios', usuariosRoutes);
app.use('/tarefas', tarefasRoutes);

// rota raiz só para health-check rápido no navegador
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    recursos: ['/usuarios', '/tarefas']
  });
});

// sobe o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
 //abre o terminal, ao lado do +, clica em command prompt -> digita npm install cors --save, vai instalar o node modules -> npm para baixar o resto -> npm run dev.