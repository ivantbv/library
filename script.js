let myLibrary = [];
let btnClicked = 0;
const bookAdd = document.querySelector('.add');

const container = document.querySelector('#book-card');

function Book(title, author, pages, read) {
    this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
  }

  Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages long. Is read - ${this.read}`
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  let addTitle = document.querySelector('#title')
  let addAuthor = document.querySelector('#author');
  let addPages = document.querySelector('#pages');
  let addRead = document.querySelectorAll('input[name="read"]')
  let selectedValue

function addBookToLibr() {
    bookAdd.addEventListener('click', function() {

        //for (let i = 0; i <= 4; i++) {
           
            for (const radioBtn of addRead) {
                if (radioBtn.checked) {
                    selectedValue = radioBtn.value;
                    break;
                }
            }

           let inf = new Book(`${addTitle.value}`, `${addAuthor.value}`, `${addPages.value}`, `${selectedValue}`);

           myLibrary.push(inf);
           console.log(inf);
        console.log(myLibrary);
        console.log(inf.info)
        btnClicked = 1;

        // for (let property in inf) {
        //     console.log(property + '=' + inf[property])
        // }

        function displayBooks() {
            if (myLibrary.length > 0) {

                    const div = document.createElement('div');
                    div.className += 'book-divs'
                    div.textContent = `${inf.title} | ${inf.author} | ${inf.pages} | ${inf.read}`;
                    console.log(div);
                    container.appendChild(div);
        }
        }
        displayBooks();
    })
    //can take user's input
    //can store the new Book object into myLibrary
}
addBookToLibr();

// if (btnClicked > 0) {
//     addTitle.value = '';
//     addAuthor.value = '';
// }

