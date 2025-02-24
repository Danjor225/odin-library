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

function addButtonToBook(){
    let bookToAddButton = libraryDisplay.lastChild
    let buttonToAdd = document.createElement('button')
    buttonToAdd.textContent = "Remove Book"
    buttonToAdd.addEventListener('click', () => {
        // code to remove book from library list
        let bookIndexNum = findBookIndexNum(bookToAddButton.firstChild.textContent)
       myLibrary.splice(bookIndexNum, 1)
        bookToAddButton.remove()
        console.log(myLibrary)

    })
    bookToAddButton.appendChild(buttonToAdd)
}

function findBookIndexNum(toCheckFor){
    let indexNum
    myLibrary.forEach(book => {
        let bookSentenceToCheck = book.displayBookContent()
        if(bookSentenceToCheck == toCheckFor){
            indexNum =  myLibrary.findIndex((bookToCheck) => bookToCheck === book)
            
        }

    })
    return indexNum

}

function displayBooks(){

    myLibrary.forEach(element => {
        
        bookContainer = document.createElement('div')
        libraryDisplay.appendChild(bookContainer)
        bookDisplay = document.createElement('p')
        bookContainer.appendChild(bookDisplay)
        bookDisplay.textContent = element.displayBookContent()
        addButtonToBook()

    });

}

function clearElement(toClear){
    toClear.innerHTML = ""
    
}

const addBookBtn = document.querySelector('#addBook')
addBookBtn.addEventListener('click', (e)  => {
    addBookBtn.disabled = true;
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
    let submitButton = document.createElement('button')
    newBookDisplay.appendChild(submitButton)
    submitButton.textContent ='Submit'
    submitButton.addEventListener('click', () =>{
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value)
        clearElement(newBookDisplay)
        clearElement(libraryDisplay)
        displayBooks()
        addBookBtn.disabled = false;
        
    })
})

    




addBookToLibrary('Lord of the Rings', 'J.R.R Tolkien', 268, 'No')
addBookToLibrary('Jordans Life', 'Jordan', 1, 'Yes')
displayBooks();



