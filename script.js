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
    return `${this.title} ${this.author} ${this.pages} ${this.read}`
}

Book.prototype.readStatus = function(toggled) {
    return this.read
}

const toggleStatus = new Book()

// Add a button on each book’s display to change its read status.
//To facilitate this you will want to create the function that toggles a 
//book’s read status on your Book prototype instance.


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

        // for (let property in inf) {
        //     console.log(property + '=' + inf[property])
        // }

        function displayBooks() {
            if (addAuthor.value != '' || addTitle.value != '' || addPages.value != '') {
                    const div = document.createElement('div');
                    const divAuthor = document.createElement('div');
                    const divPages = document.createElement('div');
                    const divRead = document.createElement('div');

                    div.className += 'book-divs'
                    div.textContent = `${inf.title}` 
                    
                    divAuthor.className += 'book-divs';
                    divAuthor.textContent = `${inf.author}` 
                    
                    divPages.className += 'book-divs'
                    divPages.textContent = `${inf.pages}` 
                    
                    divRead.className += 'book-divs'; 
                    divRead.textContent = `${inf.read}`;

                    container.appendChild(div);
                    container.appendChild(divAuthor);
                    container.appendChild(divPages);
                    container.appendChild(divRead);
                    
                    const removeBtn = document.createElement('button')
                    const toggleBtn = document.createElement('button');
                    toggleBtn.textContent = 'Toggle Status';
                    removeBtn.className += 'removeBtn'
                    removeBtn.textContent = 'X';
                    const blankDiv = document.createElement('div');
                    container.appendChild(blankDiv);

                    
                    blankDiv.appendChild(removeBtn);
                    blankDiv.append(toggleBtn);

                    container.style.cssText = 'border: 1px solid black;'

                    removeBtn.addEventListener('click', () => {
                    //    div.removeChild(div.firstChild)
                    //    div.removeChild(removeBtn);
                       div.remove();
                       divAuthor.remove();
                       divPages.remove();
                       divRead.remove();
                       blankDiv.remove();
                       
                       //container.style.cssText = '';
                    });

                    toggleBtn.addEventListener('click', () => {
                        if (divRead.textContent == 'Read status: Read') {
                            divRead.textContent = 'Read status: Not read';
                        } else if (divRead.textContent == 'Read status: Not read') {
                            divRead.textContent = 'Read status: In progress'
                        } else if (divRead.textContent == 'Read status: In progress') {
                            divRead.textContent = 'Read status: Read'
                        }
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