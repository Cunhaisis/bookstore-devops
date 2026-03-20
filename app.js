const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', price: 99.9, category: 'Engenharia de Software' },
  { id: 2, title: 'The DevOps Handbook', author: 'Gene Kim', price: 119.9, category: 'DevOps' },
  { id: 3, title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', price: 129.9, category: 'Arquitetura' },
  { id: 4, title: 'Kubernetes Up and Running', author: 'Brendan Burns', price: 109.9, category: 'Cloud' }
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/books', (req, res) => {
  res.json(books);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

module.exports = app;