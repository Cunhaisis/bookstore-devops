async function loadBooks() {
  const response = await fetch('/api/books');
  const books = await response.json();

  const list = document.getElementById('book-list');
  const search = document.getElementById('search');

  function render(filteredBooks) {
    list.innerHTML = filteredBooks.map(book => `
      <div class="book-card">
        <h3>${book.title}</h3>
        <p><strong>Autor:</strong> ${book.author}</p>
        <p><strong>Categoria:</strong> ${book.category}</p>
        <p><strong>Preço:</strong> R$ ${book.price.toFixed(2)}</p>
        <button onclick="alert('Compra simulada com sucesso!')">Comprar</button>
      </div>
    `).join('');
  }

  render(books);

  search.addEventListener('input', () => {
    const value = search.value.toLowerCase();
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(value)
    );
    render(filtered);
  });
}

loadBooks();