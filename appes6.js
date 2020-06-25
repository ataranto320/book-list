class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
    const list = document.getElementById("book-list");
    // create tr(table row) element
    const row = document.createElement("tr");
    // insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X<a></td>
    `;

    list.appendChild(row);
    }

    showAlert(message, className) {
    // create div
    const div = document.createElement("div");
    // add classes
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parent 
    const container = document.querySelector(".container");
    // get form
    const form = document.querySelector("#book-form");
    // insert alert
    container.insertBefore(div, form);
    // timeout after 3 secs
    setTimeout(function() {
        document.querySelector(".alert").remove();
    }, 3000);
    }

    deleteBook(target) {
        if (target.className === "delete") {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
    }
}

// local storage class
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem("books") === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;
    }

    static displayBooks() {

    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    }

    static removeBook() {

    }
}

// event listener for adding book
    document.getElementById("book-form").addEventListener("submit", function(e) {
    // get form values
    const title = document.getElementById("title").nodeValue,
    author = document.getElementById("author").nodeValue,
    isbn = document.getElementById(isbn).value
    // instantiate book
    const book = new Book(title, author, isbn);
    // instantiate ui
    const ui = new UI();
    // console.log(ui);
    // validate 
    if (title === "" || author === "" || isbn === "") {
        // error alert 
        ui.showAlert("please fill in all fields", "error");
    } else {
    // add book to list
    ui.addBookToList(book);
    // add to local storage
    Store.addBook(book);
    //show success
    ui.showAlert("Book Added", "success");
    // clear fields
    ui.clearFields();
    }

    e.preventDefault();
});

// event listener for delete
    document.getElementById("book-list").addEventListener("click", function(e) {
    // instantiate ui
    const ui = new UI();
    // delete book
    ui.deleteBook(e.target);
    // show alert
    ui.showAlert("book removed", "success");

    e.preventDefault();
});