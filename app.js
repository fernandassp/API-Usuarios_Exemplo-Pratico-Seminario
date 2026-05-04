const express = require('express');
const app = express();

app.use(express.json());

const usuariosRoutes = require('./routes/usuarios');
app.use('/usuarios', usuariosRoutes);

// rota principal
app.get('/', (req, res) => {
    res.send('<h1> API rodando! </h1>');
});

// iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});