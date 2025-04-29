const showDialogBtn = document.getElementById("showDialogBtn");
const addBookDialog = document.getElementById("addBookDialog");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookPageCount = document.getElementById("bookPageCount");
// const hasBeenRead = document.getElementById ("hasBeenRead");
// const hasNotBeenRead = document.getElementById("hasNotBeenRead");
const addBookBtn = document.getElementById("addBook");

const library = document.querySelector("#library");


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
    const title = document.createElement("p");
    title.classList.add("titles");
    title.textContent = bookTitle.value;

    const author = document.createElement("p");
    author.classList.add("authors");
    author.textContent = bookAuthor.value;

    const numOfPages = document.createElement("p");
    numOfPages.classList.add("numOfPages");
    numOfPages.textContent = bookPageCount.value;

    const testBook = new Book(title, author, numOfPages);

    

    if (title==="" || author === "" || bookPageCount === "") {
        alert("error please fill out all fields");
    }else {
        library.appendChild(testBook.title);
        library.appendChild(testBook.author);
        library.appendChild(testBook.numOfPages);
    }

    
}

addBookBtn.addEventListener("click", createNewBookObject);
