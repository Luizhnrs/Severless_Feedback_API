Uma API serverless para coletar feedbacks de usuários de forma rápida, escalável e totalmente gerenciada na nuvem.

✨ Visão Geral

Este projeto demonstra o uso de Node.js, TypeScript e Serverless Framework para criar APIs modernas, escaláveis e com boas práticas de backend.
A arquitetura é baseada em AWS Lambda, DynamoDB e Serverless Framework, ideal para projetos que precisam de baixo custo e alta disponibilidade.

🚀 Funcionalidades
Funcionalidade	Descrição
Criar feedback	Permite enviar mensagem, nota e nome opcional
Listar feedbacks	Retorna todos os feedbacks cadastrados
Escalabilidade	Totalmente serverless com DynamoDB
Fácil deploy	Configuração simples via Serverless Framework
🧩 Tecnologias

Node.js + TypeScript

AWS Lambda

AWS DynamoDB

Serverless Framework

UUID para identificação única dos feedbacks

📁 Estrutura do Projeto
serverless-feedback-api/
├─ src/
│  ├─ handlers/        # Funções Lambda (create/list feedback)
│  ├─ services/        # Comunicação com DynamoDB
│  ├─ models/          # Tipagens e interfaces
│  ├─ utils/           # Helpers (respostas padrão)
├─ serverless.yml      # Configuração do Serverless Framework
├─ tsconfig.json       # Configuração TypeScript
├─ package.json
└─ README.md

⚙️ Setup do Projeto
1️⃣ Instalar dependências
npm install

2️⃣ Rodar localmente
npx serverless offline


A API ficará disponível em http://localhost:3000.

3️⃣ Fazer deploy na AWS
npx serverless deploy

📡 Exemplos de Requisições
Criar Feedback

POST /feedback

{
  "name": "Luiz",
  "message": "Projeto incrível!",
  "rating": 5
}


Resposta

{
  "id": "c3a9e2d4-7f98-4c34-b2b9-ef65e4fbb0a3",
  "name": "Luiz",
  "message": "Projeto incrível!",
  "rating": 5,
  "createdAt": "2025-10-07T18:30:00.000Z"
}

Listar Feedbacks

GET /feedback

[
  {
    "id": "c3a9e2d4-7f98-4c34-b2b9-ef65e4fbb0a3",
    "message": "Muito bom!",
    "rating": 4,
    "createdAt": "2025-10-07T18:30:00.000Z"
  }
]

🧠 Uso da Inteligência Artificial

Durante o desenvolvimento, utilizei ChatGPT para:

Estruturar o projeto em camadas limpas (handlers, services, utils)

Criar templates de funções Lambda e configuração serverless.yml

Documentar rapidamente o projeto e gerar README inicial

Otimizar produtividade e reduzir erros de configuração

Isso me permitiu focar em lógica de negócio e arquitetura, enquanto a IA cuidava do boilerplate.

🔮 Próximos Passos

Adicionar validações avançadas e tratamento de erros

Criar um frontend React para envio de feedbacks

Integrar com AWS SES para alertas por e-mail

👨‍💻 Autor

Luiz Henrique Silva
Desenvolvedor focado em Node.js, AWS e arquitetura serverless, unindo programação e automação.

📬 LinkedIn
 | GitHub
