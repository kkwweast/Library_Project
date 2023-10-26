const books = [
  {
    id: 1,
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    read: false,
  },

  {
    id: 2,
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    read: false,
  },
  {
    id: 3,
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    read: false,
  },
  {
    id: 4,
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    read: false,
  },
];
class Book {
  constructor(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value + "pg";
    this.read = form.read.checked;
  }
}
class Library {
  constructor(books) {
    this.bookCount = books.length;
    this.books = books;
  }
  
    class (myButton) {
     const myButton = document.getElementById('myButton');
     myButton.style.padding = '20px 40px';
     myButton.style.fontSize = '20px';
  }
  addBook(Book) {
    if (Book) {
      const title = document.getElementById("title");
      const aurhor = document.getElementById("author");
      const read = document.getElementById("read");
      const newBook = new Book(title.value, author.value, read.value);
    }

    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;
    let read = document.getElementById("readCheckbox").checked;

    let newBook = new Book(this.bookCount, title, author, read);
    this.books.push(newBook);

    let newRow = document.createElement("tr");
    td1.textContent = newBook.title;

    let td1 = document.createElement("td");
    td2.textContent = newBook.author;

    newTitle.textContent = title || newBook.title;
    newAuthor.textContent = author || newBook.author;
    const newCheckbox = document.createElement("input");
    newcheckBox.classList.add(id || newBook.id);
    newcheckhBox.type = "checkbox";
    newcheckBox.checked = read || readInput.checked;
    newcheckBox.disabled = read || read.checked;
    newcheckBox.addEventListener("click", () => {
      this.markRead(event.target, id || newBook.id);
    });
    newRead.appendChild(newCheckbox);
  }

  markRead(checkbox, id) {
    this.books.forEach((book) => {
      if (id === book.id) {
        checkbox.disabled = false;
      }
    });
  }

  markFavorite(Book) {
    this.books.forEach((book) => {
      if (book.id === bookId) {
        book.favorite = !book.favorite;
      }
    });
    document.getElementsByClassName(books)[0].classList.toggle("favorite");
  }

  removeBook(bookId) {
    this.Book = this.Books.filter(({ id }) => bookId != id);
    const tbody = document.getElementById("tableBody");
    tbody.removeChild(document.getElementsByClassName(bookId)[0]);
  }
}
const Library = new Library(Books);
if (books.length > 0) {
}
Library.BooksforEach((_Books) => {
  library.addBook;
});

function underlineText() {
  const element = document.getElementById('underlinedText');
  element.style.textDecoration = 'underline';
}

