const myLibrary = [];
const libraryDisplay = document.querySelector('#libraryDisplay')
const newBookDisplay = document.querySelector('#newBookDisplay')

function Book(title, author, pages, read){

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.displayBookContent = function(){
        return `${this.title} by ${this.author} with ${pages} no of pages`
    };

}

function addBookToLibrary(title, author, pages, read){

    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
}

function displayBooks(){

    myLibrary.forEach(element => {
        
        bookDisplay = document.createElement('div')
        libraryDisplay.appendChild(bookDisplay)
        bookDisplay.textContent = element.displayBookContent()

    });

}


const addBookBtn = document.querySelector('#addBook')
addBookBtn.addEventListener('click', (e)  => {
    let titleInput = document.createElement('input')
    newBookDisplay.appendChild(titleInput)
    titleInput.placeholder = 'Title Of Book'
})

    




addBookToLibrary('Lord of the Rings', 'J.R.R Tolkien', 268, 'No')
addBookToLibrary('Jordans Life', 'Jordan', 1, 'Y')
displayBooks();



