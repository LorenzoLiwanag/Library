const showDialogBtn = document.getElementById("showDialogBtn");
const addBookDialog = document.getElementById("addBookDialog");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookPageCount = document.getElementById("bookPageCount");
const hasBeenRead = document.getElementById("hasBeenRead");
const hasNotBeenRead = document.getElementById("hasNotBeenRead");
const addBookBtn = document.getElementById("addBook");

const library = document.querySelector("#library");


const myLibrary = [];

function Book(title, author, numOfPages, read) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
}

