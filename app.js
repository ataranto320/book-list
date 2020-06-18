// book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// ui constructor
function UI() {}

// event listeners
document.getElementById("book-form").addEventListener("submit", function(e) {
    // console.log("test");

    e.preventDefault();
});