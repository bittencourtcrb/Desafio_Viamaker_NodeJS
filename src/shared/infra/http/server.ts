import app from './app';

const port = process.env.APP_API_PORT || 3333;

app.listen(port, () => {
  console.log('Servidor iniciado na porta', port);
});
