// book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// ui constructor
function UI() {}
// add book to list
UI.prototype.addBookToList = function(book) {
    // console.log(book);
    const list = document.getElementById("book-list");
    // create tr(table row) element
    const row = document.createElement("tr");
    // console.log(row);
    // insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X<a></td>
    `;

    list.appendChild(row);
}

// event listeners
document.getElementById("book-form").addEventListener("submit", function(e) {
    // console.log("test");
    // get form values
    const title = document.getElementById("title").nodeValue,
    author = document.getElementById("author").nodeValue,
    isbn = document.getElementById(isbn).value
    // console.log(title, author, isbn);
    // instantiate book
    const book = new Book(title, author, isbn);
    // console.log(book);
    // instantiate ui
    const ui = new UI();
    // console.log(ui);
    // add book to list
    ui.addBookToList(book);

    e.preventDefault();
});