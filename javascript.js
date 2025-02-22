const myLibrary = [];

function Book(title, author, pages, read){

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

}

function addBookToLibrary(title, author, pages, read){

    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
}


addBookToLibrary('Lord of the Rings', 'J.R.R Tolkien', 268, 'No')
addBookToLibrary('Jordans Life', 'Jordan', 1, 'Y')

console.log(myLibrary)


const consoleDisplay = document.querySelector('#console')

consoleDisplay.textContent = myLibrary