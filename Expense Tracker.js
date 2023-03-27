function onsignup(event){
    event.preventDefault();
    
    const expense = event.target.Expense.value;
    const description = event.target.Description.value;
    const category = event.target.Category.value;

    let myObj = {
        'Expense' : expense,
        'Description' : description,
        'Category' : category,
    }

    localStorage.setItem(myObj['Description'], JSON.stringify(myObj));
    screenFunc(myObj);
}

function screenFunc(myObj){

    const ul = document.getElementById('items');
    const li = document.createElement('li');
    li.innerHTML = JSON.stringify(myObj);

    const delBtn = document.createElement('input');
    delBtn.value = 'Delete';
    delBtn.type = 'button';
    delBtn.onclick = () => {
        localStorage.removeItem(myObj['Description']);
        ul.removeChild(li);
    }

    const editBtn = document.createElement('input');
    editBtn.value = 'Edit';
    editBtn.type = 'button';
    editBtn.onclick = () => {
        localStorage.removeItem(myObj['Description']);
        ul.removeChild(li);
        document.getElementById('Expense').value = myObj['Expense'];
        document.getElementById('Description').value = myObj['Description'];
        document.getElementById('Category').value =myObj['Category'];
    }

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    ul.appendChild(li);
}