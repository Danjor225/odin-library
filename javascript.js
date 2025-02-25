const myLibrary = [];
const libraryDisplay = document.querySelector('#libraryDisplay')
const newBookDisplay = document.querySelector('#newBookDisplay')

function Book(title, author, pages, read){

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.displayBookContent = function(){
        return `${this.title} by ${this.author} with ${pages} pages.`
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

function addReadBtn(){
    let bookToAddButton = libraryDisplay.lastChild
    let buttonToAdd = document.createElement('button')
    buttonToAdd.textContent = "Read?"
    let libraryIndexNum = findBookIndexNum(bookToAddButton.firstChild.textContent)
    
    setReadBtnColor(myLibrary[libraryIndexNum].read, buttonToAdd)
    buttonToAdd.addEventListener('click', () => {
        // code to change read status
        
        myLibrary[libraryIndexNum].read = !myLibrary[libraryIndexNum].read
        
        setReadBtnColor(myLibrary[libraryIndexNum].read, buttonToAdd)
    })
    bookToAddButton.appendChild(buttonToAdd)
}

function setReadBtnColor(bookObjReadBtn, buttonToAdd){

    
    if(bookObjReadBtn){
            
        buttonToAdd.style.backgroundColor = 'green'
    } else {
        buttonToAdd.style.backgroundColor ='red'
    }
    

}

function displayBooks(){

    myLibrary.forEach(element => {
        
        bookContainer = document.createElement('div')
        libraryDisplay.appendChild(bookContainer)
        bookDisplay = document.createElement('p')
        bookContainer.appendChild(bookDisplay)
        bookDisplay.textContent = element.displayBookContent()
        addButtonToBook()
        addReadBtn()
        
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
    pagesInput.setAttribute('type', 'number')
    let readTitle = document.createElement('span')
    newBookDisplay.appendChild(readTitle)
    readTitle.textContent = "Read?"
    let readInput = document.createElement('input')
    newBookDisplay.appendChild(readInput)
    readInput.setAttribute('type', 'checkbox')
    let submitButton = document.createElement('button')
    newBookDisplay.appendChild(submitButton)
    submitButton.textContent ='Submit'
    submitButton.addEventListener('click', () =>{
       let readChecked = readInput.checked
       console.log(readChecked)
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readChecked)
        clearElement(newBookDisplay)
        clearElement(libraryDisplay)
        displayBooks()
        addBookBtn.disabled = false;
        
    })
})

    




addBookToLibrary('Lord of the Rings', 'J.R.R Tolkien', 268, false)
addBookToLibrary('Jordans Life', 'Jordan', 1, true)
displayBooks();



