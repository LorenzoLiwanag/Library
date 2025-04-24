const showDialogBtn = document.getElementById("showDialogBtn");
const addBookDialog = document.getElementById("addBookDialog");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookPageCount = document.getElementById("bookPageCount");
// const hasBeenRead = document.getElementById ("hasBeenRead");
// const hasNotBeenRead = document.getElementById("hasNotBeenRead");
const addBookBtn = document.getElementById("addBook");

const myLibrary = [];

function Book(title, author, numOfPages) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    // this.read = read;
}

showDialogBtn.addEventListener("click", () => {
    addBookDialog.showModal();
})


const createNewBookObject = () => {
    const title = bookTitle.value;
    const author = bookAuthor.value;
    const numOfPages = bookPageCount.value;
    const testBook = new Book(title, author, numOfPages);
    console.log(testBook);
    // myLibrary.push(testBook);
}

addBookBtn.addEventListener("click", createNewBookObject);

