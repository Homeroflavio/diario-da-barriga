# 🍽️ Diário da Barriga

Aplicação fullstack em formato **PWA (Progressive Web App)** para registro diário de refeições com imagens, calendário interativo e experiência mobile.

---

## 🌐 Acesse o projeto

👉 **Link da aplicação:**  
🔗 _[https://diario-da-barriga.vercel.app]_

---

## 📸 Preview do sistema

### 📱 Tela inicial
<img width="877" height="520" alt="image" src="https://github.com/user-attachments/assets/f12c676e-dcfb-4051-bba3-5c0454a778fe" />

### 📅 Calendário e refeições
<img width="1328" height="906" alt="image" src="https://github.com/user-attachments/assets/353642fc-ad5f-47bd-a7d8-cd1a09885287" />

### ➕ Adicionar refeição
<img width="1421" height="904" alt="image" src="https://github.com/user-attachments/assets/28edbc53-06f3-4659-84c8-4c827a6c975b" />


---

## 🚀 Funcionalidades

- ✅ Cadastro de refeições (CRUD completo)
- 📸 Upload de imagens (Cloudinary)
- 📅 Calendário semanal interativo
- 📊 Visualização por dia
- 👤 Nome do usuário salvo localmente
- 📱 Interface mobile-first
- 📦 Instalável como aplicativo (PWA)

---

## 🧱 Tecnologias utilizadas

### 🔙 Backend
- Node.js
- Express
- MongoDB (Atlas)
- Mongoose
- Cloudinary
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
│   │   ├── models/        # Modelos do MongoDB (ex: Meal)
│   │   ├── controllers/   # Lógica das rotas (CRUD)
│   │   ├── routes/        # Definição das rotas da API
│   │   ├── config/        # Configurações (Cloudinary, DB, etc)
│   │   └── server.js      # Arquivo principal do backend
│   ├── .env               # Variáveis de ambiente (não versionado)
│   ├── package.json
│   └── .gitignore
│
└── meal-tracker-frontend/
    ├── index.html         # Estrutura principal da aplicação
    ├── manifest.json      # Configuração do PWA
    ├── service-worker.js  # Cache e funcionamento offline
    ├── icons/             # Ícones do aplicativo (PWA)
    │   ├── icon-192.png
    │   └── icon-512.png
    └── src/
        ├── main.js        # Lógica da aplicação (API, DOM, etc)
        └── styles.css     # Estilização da interface
