// Estou armazenando o express nessa constante 
const express = require("express");

// Nesse ponto eu inicio o express no app
const app = express();

// Utilizando os verbs https, nesse exemplo o get ( leitura );
app.get("/message", (request, response) => {
  response.send("Hello World!");
});

// Nesse ponto eu crio uma porta que é onde vai ser o endereço da requisição
const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));