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

// show alert
UI.prototype.showAlert = function(message, className) {
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

// delete book
UI.prototype.deleteBook = function(target) {
    if (target.className === "delete") {
        target.parentElement.parentElement.remove();
    }
}

// clear fields 
UI.prototype.clearFields = function() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}

// event listener for adding book
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
    // part of ui prototype
    // console.log(ui);
    // validate 
    if (title === "" || author === "" || isbn === "") {
        // alert("failed");
        // error alert 
        ui.showAlert("please fill in all fields", "error");
    } else {
    // add book to list
    ui.addBookToList(book);
    //show success
    ui.showAlert("Book Added", "success");
    // clear fields
    ui.clearFields();
    }

    e.preventDefault();
});

// event listener for delete
document.getElementById("book-list").addEventListener("click", function(e) {
    // console.log(123);
    // instantiate ui
    const ui = new UI();
    // delete book
    ui.deleteBook(e.target);
    // show alert
    ui.showAlert("book removed", "success");

    e.preventDefault();
});