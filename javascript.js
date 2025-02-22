const myLibrary = [];

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
        document.body.appendChild(bookDisplay)
        bookDisplay.textContent = element.displayBookContent()

    });

}
addBookToLibrary('Lord of the Rings', 'J.R.R Tolkien', 268, 'No')
addBookToLibrary('Jordans Life', 'Jordan', 1, 'Y')
displayBooks();

console.log(myLibrary)


const consoleDisplay = document.querySelector('#console')
consoleDisplay.textContent = myLibrary