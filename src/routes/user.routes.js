const express = require("express");

const router = express.Router();

// POST /api/users
router.post("/", (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({
      erro: "Os campos 'nome' e 'email' são obrigatórios.",
    });
  }

  return res.status(201).json({
    mensagem: "Usuário criado com sucesso!",
    dados: { nome, email },
  });
});

module.exports = router;
