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