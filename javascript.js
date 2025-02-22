const myLibrary = [];
const libraryDisplay = document.querySelector('#libraryDisplay')
const newBookDisplay = document.querySelector('#newBookDisplay')

function Book(title, author, pages, read){

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.displayBookContent = function(){
        return `${this.title} by ${this.author} with ${pages} pages. Read? -> ${read}`
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
    let authorInput = document.createElement('input')
    newBookDisplay.appendChild(authorInput)
    authorInput.placeholder = 'Author Of Book'
    let pagesInput = document.createElement('input')
    newBookDisplay.appendChild(pagesInput)
    pagesInput.placeholder = 'No Of Pages'
    let readInput = document.createElement('input')
    newBookDisplay.appendChild(readInput)
    readInput.placeholder = 'Read? Yes or No'
})

    




addBookToLibrary('Lord of the Rings', 'J.R.R Tolkien', 268, 'No')
addBookToLibrary('Jordans Life', 'Jordan', 1, 'Yes')
displayBooks();



