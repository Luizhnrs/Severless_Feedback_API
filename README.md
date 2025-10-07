# 🧠 Serverless Feedback API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)  
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)  
![AWS Lambda](https://img.shields.io/badge/AWS-Lambda-orange?logo=amazonaws)  
![Serverless](https://img.shields.io/badge/Serverless-Framework-red?logo=serverless)  

> Uma **API serverless** para coletar feedbacks de usuários, totalmente escalável e gerenciada na nuvem, construída com **Node.js, TypeScript e Serverless Framework**.

---

## ✨ Funcionalidades
- Envio de feedbacks com **mensagem, nota e nome opcional**  
- Listagem de todos os feedbacks registrados  
- Armazenamento **serverless** com DynamoDB  
- Fácil deploy via **Serverless Framework**  
- Estrutura organizada e escalável  

---

## 🧩 Tecnologias
| Tecnologia | Descrição |
|------------|-----------|
| Node.js + TypeScript | Backend moderno e tipado |
| AWS Lambda | Execução serverless das funções |
| AWS DynamoDB | Armazenamento NoSQL escalável |
| Serverless Framework | Infraestrutura como código |
| UUID | Identificação única de feedbacks |

---

## 📁 Estrutura do Projeto
serverless-feedback-api/
├─ src/
│ ├─ handlers/ # Funções Lambda (create/list feedback)
│ ├─ services/ # Lógica de negócio e acesso ao DynamoDB
│ ├─ models/ # Tipagens TypeScript
│ └─ utils/ # Helpers de resposta padronizada
├─ serverless.yml # Configuração do Serverless Framework
├─ tsconfig.json # Configuração TypeScript
├─ package.json
└─ README.md

---

## ⚙️ Setup do Projeto

### 1️⃣ Instalar dependências
```bash
npm install
npx serverless offline
npx serverless deploy
```

📡 Endpoints da API
Criar Feedback

POST /feedback
Body (JSON):

```bash
{
  "name": "Luiz",
  "message": "Projeto incrível!",
  "rating": 5
}

```
Resposta:

```bash
{
  "id": "c3a9e2d4-7f98-4c34-b2b9-ef65e4fbb0a3",
  "name": "Luiz",
  "message": "Projeto incrível!",
  "rating": 5,
  "createdAt": "2025-10-07T18:30:00.000Z"
}

```

