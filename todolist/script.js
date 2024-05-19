var btn = document.querySelector("input[type='submit']")
var list = document.querySelector(".list")
var inp = document.querySelector("input[type='text']")

// console.log(btn , list , inp);

class Storage {
    static addToStorage(todoArray) {
        localStorage.setItem("todo", JSON.stringify(todoArray));
    }

    static getStorage() {
        return JSON.parse(localStorage.getItem("todo")) || [];
    }
}

let todoArray = Storage.getStorage();

class Todo {
    constructor(id, todo) {
        this.id = id;
        this.todo = todo;
    }
}

// Event listener for adding new todo item
btn.addEventListener("click", (e) => {
    e.preventDefault();
    let idRandom = Math.random() * 1000000;
    let todoInput = new Todo(idRandom, inp.value);
    todoArray.push(todoInput);
    Storage.addToStorage(todoArray); // Update local storage
    UI.displayData(); // Update UI
});

class UI {
    static displayData() {
        list.innerHTML = todoArray.map((item) => {
            return `
                <div class="todo">
                    <p>${item.todo}</p>
                    <span><i class="fa-solid fa-trash fa-xl remove" data-id="${item.id}"></i></span>
                </div>
            `;
        }).join('');
    }
}

UI.displayData(); // Initial display of todo items

// Event listener for removing todo item
list.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        let trashId = e.target.dataset.id;
        todoArray = todoArray.filter((item) => item.id != trashId);
        Storage.addToStorage(todoArray); // Update local storage
        UI.displayData(); // Update UI
    }
});


UI.displayData()
UI.removeTodo()