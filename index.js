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

function Book(title, author, numOfPages,) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    // this.read = read;
}


showDialogBtn.addEventListener("click", () => {
    addBookDialog.showModal();
})

addBookBtn.addEventListener("click", () => {
    const newBook = new Book;

    newBook.title = bookTitle.value;
    newBook.author = bookAuthor.value;
    newBook.numOfPages = bookPageCount.value;

    myLibrary.push(newBook);

    for (let i = 0; i < myLibrary.length; i++) {
        createBookCard(newBook.title, newBook.author, newBook.numOfPages);
    }


})

const createBookCard = (title, author, pageCount) => {
    const bookCardTitle = document.createElement("h2");
    bookCardTitle.classList.add("bookCardTitle");
    bookCardTitle.textContent = title;

    const bookCardAuthor = document.createElement("p");
    bookCardAuthor.classList.add("bookCardAuthor");
    bookCardAuthor.textContent = `Author: ${author}`;

    const bookCardPageCount = document.createElement("p");
    bookCardPageCount.classList.add("bookCardPageCount");
    bookCardPageCount.textContent = `Pages: ${pageCount}`;

    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    bookCard.appendChild(bookCardTitle);
    bookCard.appendChild(bookCardAuthor);
    bookCard.appendChild(bookCardPageCount);

    library.appendChild(bookCard);
};
