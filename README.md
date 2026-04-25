# 🍽️ Diário da Barriga

Aplicação fullstack desenvolvida como atividade acadêmica, com o objetivo de registrar refeições diárias de forma simples, visual e interativa.

## 🚀 Sobre o projeto

O **Diário da Barriga** é um aplicativo web em formato **PWA (Progressive Web App)** que permite ao usuário:

- Registrar refeições ao longo do dia
- Adicionar descrição, data, horário e imagem
- Visualizar refeições por dia através de um calendário interativo
- Instalar o app no celular como se fosse um aplicativo nativo
- Personalizar o nome do usuário localmente

---

## 🧱 Tecnologias utilizadas

### 🔙 Backend
- Node.js
- Express
- MongoDB (Atlas)
- Mongoose (ORM)
- Cloudinary (upload de imagens)
- Multer

### 🎨 Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

### 📱 PWA
- Manifest.json
- Service Worker

---

## 📂 Estrutura do projeto

```bash
meal-tracker/
├── meal-tracker-backend/
│   ├── src/
│   ├── .env
│   └── server.js
│
└── meal-tracker-frontend/
    ├── index.html
    ├── manifest.json
    ├── service-worker.js
    ├── icons/
    └── src/
