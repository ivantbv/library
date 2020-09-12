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

//   Book.prototype.info = function() {
//     return `${this.title} ${this.author} ${this.pages} ${this.read}`
// }

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  let addTitle = document.querySelector('#title')
  const addAuthor = document.querySelector('#author');
  const addPages = document.querySelector('#pages');
  const addRead = document.querySelectorAll('input[name="read"]')
  let selectedValue

function addBookToLibr() {
    bookAdd.addEventListener('click', function() {
           
            for (const radioBtn of addRead) {
                if (radioBtn.checked) {
                    selectedValue = radioBtn.value;
                    break;
                }
            }
           inf = new Book(`${addTitle.value}`, `by ${addAuthor.value}`, `${addPages.value} pages`, `Status: ${selectedValue}`);

           myLibrary.push(inf);

        // if (selectedValue == 'Read') {
        //    divRead.style.color = '#bb2b00'
        // } else if (selectedValue == 'Not read') {

        //   divRead.style.color = '#ffdc31';
        // } else if (selectedValue == 'In progress') {
        //     divRead.style.color = '#31e61b'
        // }

        function displayBooks(obj) {
            if (addAuthor.value != '' && addTitle.value != '' && addPages.value != '') {
                    const div = document.createElement('div');
                    const divAuthor = document.createElement('div');
                    const divPages = document.createElement('div');
                    const divRead = document.createElement('div');
                    const nextBtn = document.createElement('button');
                    nextBtn.classList.add('nextPage');

                    // notesArea.addEventListener('input', (e) => {
                    //   notesArea.textContent = e.target.value;
                      
                    //   const storedItem = localStorage.getItem('library')
                    //   const saveToLocalStorage = () => {
                    //     localStorage.setItem('library', notesArea.textContent)
                    //   }
                    //  saveToLocalStorage();
  
                    //   if (notesArea) {
                    //     notesArea.textContent = storedItem;
                    //    }
                    //   saveNotesBtn.addEventListener('click', saveToLocalStorage)
                    // });
                    
                    //  const nextBtn = document.getElementsByTagName('svg')
        
                    //nextBtn.style.cssText = 'visibility: visible;'
                   nextBtn.textContent = '>';
                  
                    const bookCard = document.createElement('div');
                    bookCard.classList.add('styleCards');
                    bookCard.classList.add('paper');

                    div.className += 'toBeStyled'
                    div.textContent = `${inf.title.toUpperCase()}`
                    
                    divAuthor.className += 'book-divs';
                    divAuthor.textContent = `${titleCase(inf.author)}`
                    
                    divPages.className += 'pages'
                    divPages.textContent = `${inf.pages}`
                    
                    //divRead.className += 'book-divs'; 
                    divRead.className += 'statusRead'
                    divRead.textContent = `${inf.read}`;

                    const removeBtn = document.createElement('button')
                    const toggleBtn = document.createElement('button');
                    toggleBtn.textContent = 'Toggle Status';
                    toggleBtn.className += 'toggleBtn'
                    removeBtn.className += 'removeBtn'
                    removeBtn.textContent = 'X';
                    const blankDiv = document.createElement('div');

                    bookCard.appendChild(div);
                    bookCard.appendChild(divAuthor);
                    bookCard.appendChild(divPages);
                    bookCard.appendChild(divRead);
                    bookCard.appendChild(nextBtn);
                    bookCard.appendChild(removeBtn)
                    bookCard.append(toggleBtn);
                    container.appendChild(blankDiv);

                    const notesArea = document.createElement('textarea')
                    notesArea.placeholder = 'Add notes, current page etc...';
                    notesArea.classList.toggle('removed')
                    bookCard.appendChild(notesArea);
                   
                    container.appendChild(bookCard); 
                    
                    //localStorage.setItem('lib', container)

                    nextBtn.addEventListener('click', () => {
                        toggleBtn.classList.toggle('removed');
                        //bookCard.classList.add('removed')
                        div.classList.toggle('removed');
                        divAuthor.classList.toggle('removed');
                        divPages.classList.toggle('removed');
                        divRead.classList.toggle('removed');

                        notesArea.classList.toggle('notes');
                        notesArea.classList.toggle('removed');                      
                    })                    

                    blankDiv.style.cssText = 'display: flex; align-items: center;'
                toggleBtn.style.cssText = 'position: relative;'
                    removeBtn.addEventListener('click', (e) => {
                  // myLibrary = myLibrary.filter(book => book.title !== div && book.author !== divAuthor.innerText);
                   
                      myLibrary = myLibrary.reduce((p,c) => (c.title !== div.innerText && c.author !== divAuthor.innerText && c.pages !== divPages.innerText && c.read !== divRead && p.push(c),p),[]);
                      console.log(myLibrary);
                   
                       div.remove();
                       divAuthor.remove();
                       divPages.remove();
                       divRead.remove();
                       blankDiv.remove();
                       bookCard.remove();
                       toggleBtn.remove();
                       removeBtn.remove()
                       //localStorage.removeItem('lib')                      
                       //container.style.cssText = '';
                    });

                    toggleBtn.addEventListener('click', () => {
                        if (divRead.textContent == 'Status: Read') {
                            divRead.textContent = 'Status: Not read';
                           // divRead.style.color = '#bb2b00'
                        } else if (divRead.textContent == 'Status: Not read') {
                            divRead.textContent = 'Status: In progress'
                          //divRead.style.color = '#ffdc31';
                        } else if (divRead.textContent == 'Status: In progress') {
                            divRead.textContent = 'Status: Read'
                            //divRead.style.color = '#31e61b'
                        }
                    }) 

                    myLibrary.forEach(function(key) {
                      localStorage.setItem(key, JSON.stringify(inf));

                      const retrieveData = localStorage.getItem(key)
                      JSON.parse(retrieveData);
                    })
                    
                    // Object.keys(localStorage).forEach(function(key) {
                      
                    // })

                 
              }
        }
        displayBooks();

       if (addTitle.value.length > 0 && addAuthor.value.length > 0 && addPages.value.length > 0) {
            addAuthor.value = '';
            addTitle.value = '';
            addPages.value = '';
        }
    })
}
addBookToLibr();

  
     

//cap max length on number input
function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }
    
  function isNumeric (evt) {
    let theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode (key);
    let regex = /[0-9]|\./;
    if ( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

    //capitalize each first letter on every word (for the authors)
  function titleCase(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }



// function btnDisabled(btn) {
//    //return  !addTitle.value.length || !addAuthor.value.length || !addPages.value.length ?   bookAdd.disabled = true :  bookAdd.disabled = false;
//     if (addTitle.value.length > 0 || addAuthor.value.length > 0 || addPages.value.length > 0) { 
//        btn.disabled = false;
//     }
//     }
//     btnDisabled(bookAdd);