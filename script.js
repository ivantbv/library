let myLibrary = [];
const bookAdd = document.querySelector('.add');
const form = document.querySelector('.form-container');
const addRead = document.querySelectorAll('input[name="read"]')
const container = document.querySelector('#book-card');

function setLocalStorage() {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));

 let lib =  localStorage.getItem('myLibrary');
  JSON.parse(lib);
 }

function Book(title, author, pages, read, textNotes, id) {
    this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = `Status: ${form.read.value}`;
      [...addRead].forEach(function(i) {
        read = i.value;
        //console.log(i.value);
      })
      this.textNotes = textNotes;
      this.id = myLibrary.length;
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
  const notesContent = document.getElementsByClassName('notes');
  
let selectedValue

function addBookToLibr() {
    bookAdd.addEventListener('click', function() {
      const divRead = document.createElement('div');
            for (const radioBtn of addRead) {
                if (radioBtn.checked) {
                    selectedValue = radioBtn.value;

                    if (selectedValue == 'Read') {
           divRead.style.color = '#31e61b'
           //'#bb2b00';
        } else if (selectedValue == 'Not read') {
          divRead.style.color = '#bb2b00'
          } else if (selectedValue == 'In progress') {
            divRead.style.color = 'yellow'
        }
                    break;
                }
            }

           inf = new Book(`${addTitle.value}`, `by ${addAuthor.value}`, `${addPages.value} pages`, `Status: ${selectedValue}`);
           myLibrary.push(inf);        
            for (let book in myLibrary) {
              console.log(myLibrary[book].id);
            }

        function displayBooks() {
         if (addAuthor.value != '' && addTitle.value != '' && addPages.value != '') {
                    const div = document.createElement('div');
                    const divAuthor = document.createElement('div');
                    const divPages = document.createElement('div');
                    
                    const nextBtn = document.createElement('button');
                    nextBtn.classList.add('nextPage');
                    
                    const notesArea = document.createElement('textarea')
                    notesArea.placeholder = 'Add notes, current page etc...';
                    const saveNotesBtn = document.createElement('button');
                    saveNotesBtn.textContent = 'Save Notes'
                    saveNotesBtn.classList.add('save-notes');
                    
                    const bookCard = document.createElement('div');
                    bookCard.classList.add('styleCards');
                    bookCard.classList.add('paper');
                    
                    bookCard.dataset.index = inf.id;

                    notesArea.addEventListener('input', (e) => {
                     notesArea.textContent = e.target.value;                
                    });
                    
                  saveNotesBtn.addEventListener('click', function() {                        
                        myLibrary[`${bookCard.dataset.index}`].textNotes = notesArea.value;
                        setLocalStorage();
                      });
                      nextBtn.textContent = '>';
                    //  const nextBtn = document.getElementsByTagName('svg')
                    //nextBtn.style.cssText = 'visibility: visible;'
                   
                    // myLibrary.forEach(book => {
                    //   bookCard.dataset.index = myLibrary[book].id
                    // })
                   // document.querySelectorAll(`div[data-ind='${1}']`);

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

                    notesArea.classList.toggle('removed')
                    saveNotesBtn.classList.toggle('removed');
                    bookCard.appendChild(notesArea);
                    bookCard.appendChild(saveNotesBtn);
                   
                    container.appendChild(bookCard);

                    nextBtn.addEventListener('click', () => {
                        toggleBtn.classList.toggle('removed');
                        div.classList.toggle('removed');
                        divAuthor.classList.toggle('removed');
                        divPages.classList.toggle('removed');
                        divRead.classList.toggle('removed');

                        notesArea.classList.toggle('notes');
                        notesArea.classList.toggle('removed');
                        saveNotesBtn.classList.toggle('removed');                      
                    })
                    setLocalStorage();

                    blankDiv.style.cssText = 'display: flex; align-items: center;'
                    toggleBtn.style.cssText = 'position: relative;'
                    removeBtn.addEventListener('click', (e) => {
                            myLibrary = myLibrary.reduce((p,c) => (c.title !== div.innerText && c.author !== divAuthor.innerText && c.pages !== divPages.innerText && c.read !== divRead && c.textNotes !== notesArea.innerHTML && p.push(c),p),[]);
                                                 
                             div.remove();
                             divAuthor.remove();
                             divPages.remove();
                             divRead.remove();
                             blankDiv.remove();
                             bookCard.remove();
                             toggleBtn.remove();
                             removeBtn.remove()
                             setLocalStorage();               
                          });

                    toggleBtn.addEventListener('click', (e) => {
                      
                        if (divRead.textContent == 'Status: Read') {
                            divRead.textContent = 'Status: Not read';
                            
                            divRead.style.color = '#bb2b00'
                              myLibrary[`${bookCard.dataset.index}`].read = 'Status: Not read'
                            setLocalStorage();
                            
                        } else if (divRead.textContent == 'Status: Not read') {
                            divRead.textContent = 'Status: In progress';
                            
                            divRead.style.color = 'yellow'
                            myLibrary[`${bookCard.dataset.index}`].read = 'Status: In progress'
                            
                            setLocalStorage()
                        } else if (divRead.textContent == 'Status: In progress') {
                            divRead.textContent = 'Status: Read';
                            divRead.style.color = '#31e61b'                 
                            myLibrary[`${bookCard.dataset.index}`].read = 'Status: Read'

                            // for(let i in myLibrary) {
                            //   myLibrary[i].read = 'Status: Read'
                            //   console.log(myLibrary[i].read);
                            // }
                            setLocalStorage();
                        }
                    })               
              }  
              else if (addAuthor.value == '' || addTitle.value == '' || addPages.value == '') {
                //stop button from working
                return
              }
            setLocalStorage();
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