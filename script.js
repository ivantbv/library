let myLibrary = [];
const addBtn = document.querySelector('#book-btn')

function Book(title, author, pages, read) {
    this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
  }

  Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages long. Is read - ${this.read}`
}

function addBookToLibr() {
    addBtn.addEventListener('click', function() {
        //let addBook = prompt('Enter the title of the book');

        //for (let i = 0; i <= 4; i++) {
            let addTitle = prompt('Enter the title of the book')
            let addAuthor = prompt('Enter the author of the book');
            let addPages = prompt('Number of pages?')
            let addRead = prompt('Did you finish reading it?')
           let info = new Book(`${addTitle}`, `${addAuthor}`, `${addPages}`, `${addRead}`);

           myLibrary.push(info);
        console.log(myLibrary);
        
    })
    //can take user's input
    //can store the new Book object into myLibrary
}
addBookToLibr();