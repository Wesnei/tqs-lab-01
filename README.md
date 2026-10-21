# 🧪 Laboratório 01: Testes Unitários e de Integração

**Instituto Federal do Ceará (IFCE) - Campus Boa Viagem**  
**Curso:** Tecnologia em Análise e Desenvolvimento de Sistemas (ADS)  
**Disciplina:** Teste e Qualidade de Software  
**Professor:** Prof. Esp. Wesnei de Paiva Batista  

---

## 🎯 Objetivo

Este repositório contém o código-fonte base (API Node.js modularizada com Express) para a primeira aula prática de laboratório da disciplina.

O objetivo desta prática é introduzir a automação de testes na engenharia de software moderna. Durante o laboratório, os alunos irão configurar a **base e o meio da Pirâmide de Testes**, implementando:

1. **Testes Unitários:** para validar a lógica e as regras de negócio isoladas (funções matemáticas e utilitários).
2. **Testes de Integração:** para validar os contratos das rotas da API REST, simulando requisições HTTP reais e garantindo o comportamento correto dos status codes (ex.: `201 Created`, `400 Bad Request`).

## 🛠️ Stack Base

* **Node.js & Express:** construção da API backend.
* **Jest:** motor de testes e asserções *(a ser configurado no laboratório)*.
* **Supertest:** biblioteca para simulação de requisições e testes de integração *(a ser configurada no laboratório)*.

## 📁 Estrutura do Projeto

```
tqs-lab-01/
├── package.json
└── src/
    ├── app.js              # Configuração da API (sem listen)
    ├── server.js           # Inicialização do servidor (porta 3000)
    ├── routes/
    │   └── user.routes.js  # Rotas de usuário
    └── utils/
        └── calc.js         # Regras de negócio utilitárias
```

> 💡 **Por que separar `app.js` de `server.js`?** Para que o Supertest consiga importar o `app` e simular requisições sem abrir uma porta de rede, evitando conflitos e travamentos durante os testes.

## 🚀 Como Preparar o Ambiente

1. **Clone este repositório para a sua máquina:**
```bash
   git clone https://github.com/Wesnei/tqs-lab-01/
```

2. **Acesse a pasta do projeto:**
```bash
   cd tqs-lab-01
```

3. **Instale as dependências iniciais da API:**
```bash
   npm install
```

4. **Verifique se a API está funcionando:**
```bash
   npm start
```
   O servidor deve iniciar na porta `3000`.

## 📖 Missão do Laboratório

A instalação das ferramentas de teste, a configuração dos scripts e a criação da pasta `__tests__` serão guiadas pelo Roteiro Oficial (Notion), que será compartilhado pelo professor durante a aula. Aguarde as instruções para iniciar a codificação dos contratos de teste!

> *"A qualidade não é um ato, é um hábito."* — Aristóteles
