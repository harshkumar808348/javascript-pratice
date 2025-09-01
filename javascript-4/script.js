const addElement = document.getElementById('Text');
let todo  = [];
document.getElementById('Button').addEventListener('click',()=>{
   var text = addElement.value;
   if(text.trim()!==''){
    todo.push(text);
    DisplayTodo();
    addElement.value = '';
   }
});

function DisplayTodo(){
    const container = document.getElementById('todoContainer');
    container.innerHTML = '';

    todo.forEach((todo,index)=>{
        const div = document.createElement('div');
        div.innerHTML = `
        <span>${todo}</span>
        <button onclick="editTodo(${index})">Edit</button>
        <button onclick="deleteTodo(${index})">Delete</button>
        `;
         container.appendChild(div);
    });
}

function editTodo(index){
    const newText = prompt('Edit Todo' , todo[index]);
    if(newText!==null && newText.trim()!==''){
        todo[index] = newText;
        DisplayTodo();  
    }
}

function deleteTodo(index){
    todo.splice(index ,1);
    DisplayTodo();
}