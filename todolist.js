const todoList = []; 
const todoButton = document.querySelector('.js-add-button'); 

function renderToDoList() {
    let todoListHTML = ''; 

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i]; 
        const html = `
            <p>
                ${todo}
                <button onclick ="
                 todoList.splice(${i}, 1); 
                 renderToDoList(); 
                ">Delete</button>
            </p>`; 
        todoListHTML += html; 
    };

    document.querySelector('.js-list-items')
        .innerHTML = todoListHTML; 
};

todoButton.addEventListener('click', addTodo); 
addEventListener('keydown', enterKey);

function addTodo() {
   const inputElement = document.querySelector('.js-input');  
   const name = inputElement.value; 

   todoList.push(name); 

   inputElement.value = '';  
   renderToDoList(); 
}

function enterKey(event) {
    if (event.key === 'Enter') {
        addTodo(); 
    }
}