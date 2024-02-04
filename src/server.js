// Estou armazenando o express nessa constante 
const express = require("express");

// Nesse ponto eu inicio o express no app
const app = express();

// Utilizando os verbs https, nesse exemplo o get ( leitura );
// Route Params
app.get("/message/:id/:user", (request, response) => {
  // Desistruturando o request.params
  const { id, user } = request.params;

  response.send(`
    Mensagem ID: ${id}.
    Para o usuário ${user}.
  `);
});

// Query Params
app.get("/users", (request, response) => {
  const { page, limit } = request.query;

  response.send(`Página: ${page}. Mostrar: ${limit}.`);
});

// Nesse ponto eu crio uma porta que é onde vai ser o endereço da requisição
const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));