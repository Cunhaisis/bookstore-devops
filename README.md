# 📚 Bookstore DevOps

Aplicação web de uma **loja de livros** desenvolvida como projeto final de DevOps, com implementação de **pipeline CI/CD utilizando Jenkins**, integração com **GitHub** e **deploy na Azure App Service**.

---

## 🚀 Objetivo

O objetivo deste projeto é demonstrar a construção de um fluxo completo de **Integração Contínua e Entrega Contínua (CI/CD)**, desde o versionamento do código até o deploy automatizado em ambiente cloud.

---

## 🧱 Arquitetura da Solução

GitHub → Jenkins → Azure App Service

* **GitHub**: versionamento do código
* **Jenkins**: execução da pipeline CI
* **Azure App Service**: hospedagem da aplicação

---

## 🛠️ Tecnologias Utilizadas

* Node.js
* Express
* HTML, CSS e JavaScript
* Jenkins
* Docker
* GitHub
* Azure App Service

---

## 📦 Funcionalidades da Aplicação

* Listagem de livros 📚
* Busca por título 🔎
* Exibição de preço e categoria 💰
* Interface web responsiva 🎨
* Simulação de compra 🛒

---

## ⚙️ Pipeline CI/CD (Jenkins)

A pipeline foi configurada no Jenkins com as seguintes etapas:

1. **Checkout Code**
2. **Install Dependencies**
3. **Run Tests**
4. **Build Application**

Cada etapa é executada automaticamente a partir do repositório GitHub.

---

## 🌐 Aplicação em Produção

A aplicação está disponível em:

👉 https://bookstore-isis.azurewebsites.net

---

## ▶️ Como executar localmente

```bash
# Clonar o repositório
git clone https://github.com/Cunhaisis/bookstore-devops.git

# Acessar o diretório
cd bookstore-devops

# Instalar dependências
npm install

# Executar a aplicação
npm start
```

A aplicação ficará disponível em:

```
http://localhost:3000
```

---

## 🧪 Executar testes

```bash
npm test
```

---

## ☁️ Deploy

O deploy da aplicação foi realizado na **Azure App Service**, garantindo escalabilidade e disponibilidade em ambiente cloud.

---

## 📌 Considerações Finais

Este projeto demonstra na prática a implementação de um fluxo de CI/CD moderno, integrando ferramentas amplamente utilizadas no mercado e simulando um cenário real de desenvolvimento e entrega contínua.

---

## 👩‍💻 Autora

**Isis Cunha**

Projeto desenvolvido para fins acadêmicos na disciplina de DevOps.
