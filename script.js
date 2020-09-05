let myLibrary = [];
let btnClicked = false;
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
           
            for (const radioBtn of addRead) {
                if (radioBtn.checked) {
                    selectedValue = radioBtn.value;
                    break;
                }
            }
           let inf = new Book(`Book title: ${addTitle.value}`, `Author: ${addAuthor.value}`, `Pages Count: ${addPages.value}`, `Read status: ${selectedValue}`);

           myLibrary.push(inf);
           console.log(inf.info)
           btnClicked = true;

        // for (let property in inf) {
        //     console.log(property + '=' + inf[property])
        // }

        function displayBooks() {
            if (addAuthor.value != '' || addTitle.value != '' || addPages.value != '') {
                    const div = document.createElement('div');
                    div.className += 'book-divs'
                    div.textContent = `${inf.title} | ${inf.author} | ${inf.pages} | ${inf.read}`;
                    container.appendChild(div);
                    
                    const removeBtn = document.createElement('button')
                    removeBtn.className += 'removeBtn'
                    removeBtn.textContent = 'Remove Book';
                    div.appendChild(removeBtn);

                    removeBtn.addEventListener('click', (e) => {
                       div.removeChild(div.firstChild)
                       div.removeChild(removeBtn);
                       div.remove();
                    })
                    
        }

        }
        displayBooks();

        if (addTitle.value.length > 0 || addAuthor.value.length > 0 || addPages.value.length > 0) {
            addAuthor.value = '';
            addTitle.value = '';
            addPages.value = '';
        }

   
    })
    //can store the new Book object into myLibrary
}
addBookToLibr();


// function btnDisabled(btn) {
//    //return  !addTitle.value.length || !addAuthor.value.length || !addPages.value.length ?   bookAdd.disabled = true :  bookAdd.disabled = false;
//     if (addTitle.value.length > 0 || addAuthor.value.length > 0 || addPages.value.length > 0) { 
//        btn.disabled = false;
//     }
//     }
//     btnDisabled(bookAdd);