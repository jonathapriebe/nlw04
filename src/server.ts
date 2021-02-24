import express from 'express';

const app = express();

app.get("/users", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.post("/", (request, response) => {
  return response.json({ message: "Dados salvos com sucesso!" });
});

app.listen(3000, () => console.log("Server is running"));