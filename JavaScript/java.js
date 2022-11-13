let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function (){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read?"readed":"not read yet"}`
    }
}

const addBookToLibrary = function(book) {
    myLibrary.push(book);
}

const display = function(Library){
    
    console.log(Library)
    const lib = document.getElementById("container")
    lib.innerHTML = ''
    for(let i = 0; i< Library.length; i++){
        const div = document.createElement("div")
        div.textContent = Library[i].info()
        lib.appendChild(div)
        const remove = document.createElement("button")
        remove.textContent = "Remove"
        remove.value = i;
        div.appendChild(remove)
        remove.addEventListener("click", removefromlist)
        const IsRead = document.createElement("input")
        const label = document.createElement("label")
        label.textContent= "read"
        input = document.createElement("input")
        label.setAttribute("for", "readed")
        input.setAttribute("type", "checkbox")
        input.setAttribute("id", "readed")
        input.setAttribute("name", "readed")
        input.setAttribute("value", i)
        if(Library[i].read){
            input.setAttribute("checked","")
        }
        div.appendChild(label)
        div.appendChild(input)
        input.addEventListener("click", changeVal)
    }
}
function changeVal(e){
    console.log(e.target["value"])
    console.log(myLibrary[e.target["value"]].read)
    myLibrary[e.target["value"]].read = myLibrary[e.target["value"]].read?false:true
    for(let x=0;x<myLibrary.length;x++){
        console.log(myLibrary[x].info())
    }
    display(myLibrary)
}


function removefromlist(e){
    console.log(e.target.value)
    l = []
    for(let i = 0; i<myLibrary.length;i++){
        if(i != e.target.value){
            l.push(myLibrary[i])
        }
    }
    myLibrary = l
    display(myLibrary)
}

addBookToLibrary.bind(Book)
const button = document.getElementById("btn")
button.addEventListener("click", setForm)

function setForm(){
    const form = document.querySelector("form")
    if(form.elements.length == 0){
        let label = document.createElement("label")
        label.textContent="book name"
        let input = document.createElement("input")
        label.setAttribute("for", "book-name")
        input.setAttribute("type", "text")
        input.setAttribute("id", "book-name")
        input.setAttribute("name", "book-name")
        input.setAttribute("required","")
        form.appendChild(label)
        form.appendChild(input)
        
        label = document.createElement("label")
        label.textContent="author"
        input = document.createElement("input")
        label.setAttribute("for", "author")
        input.setAttribute("type", "text")
        input.setAttribute("id", "author")
        input.setAttribute("name", "author")
        input.setAttribute("required","")
        form.appendChild(label)
        form.appendChild(input)


        label = document.createElement("label")
        label.textContent="pages"
        input = document.createElement("input")
        label.setAttribute("for", "pages")
        input.setAttribute("type", "number")
        input.setAttribute("id", "pages")
        input.setAttribute("name", "pages")
        input.setAttribute("required","")
        form.appendChild(label)
        form.appendChild(input)

        const div = document.createElement("div")
        div.textContent = "Have you read?"
        form.appendChild(div)
        label = document.createElement("label")
        label.textContent="yes"
        input = document.createElement("input")
        label.setAttribute("for", "read")
        input.setAttribute("type", "radio")
        input.setAttribute("id", "read")
        input.setAttribute("name", "read")
        input.setAttribute("checked","")
        div.appendChild(label)
        div.appendChild(input)

        label = document.createElement("label")
        label.textContent="no"
        input = document.createElement("input")
        label.setAttribute("for", "read")
        input.setAttribute("type", "radio")
        input.setAttribute("id", "read")
        input.setAttribute("name", "read")
        div.appendChild(label)
        div.appendChild(input)
        
        const submit = document.createElement("button")
        submit.textContent = "submit"
        form.appendChild(submit)
        form.addEventListener("submit",getData)
    }
}
function getData(e){
    
    const new_book = new Book(e.target.elements["book-name"].value, e.target.elements["author"].value, e.target.elements["pages"].value, e.target.elements["read"].value)
    addBookToLibrary(new_book)
    console.log(myLibrary)
    display(myLibrary)
    e.preventDefault()
}
