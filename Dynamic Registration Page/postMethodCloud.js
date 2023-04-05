function onsignup(event) {
    event.preventDefault();

    const expense = event.target.Expense.value;
    const description = event.target.Description.value;
    const category = event.target.Caregory.value;

    myObj = {
        expense,
        description,
        category
    }

    // localStorage.setItem(myObj.description, myObj);
    axios.post('https://crudcrud.com/api/3ec4f73486c74564ac22444e9a78b319/ExpenseTracker', myObj)
        .then((resolve) => {
            onScreenFunction(myObj);
            console.log(resolve);
        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + '<h4>kuch toh gadabad hain Daya</h4>';
            console.error(err);
        })
        // onScreenFunction(myObj);
}

function onScreenFunction(myObj) {
    const ul = document.getElementById('ul');

    const li = document.createElement('li');
    li.innerHTML = JSON.stringify(myObj);

    const delBtn = document.createElement('input');
    delBtn.type = 'button';
    delBtn.value = 'Delete';
    delBtn.onclick = () => {
        localStorage.removeItem(myObj.description);
        ul.removeChild(li);
    }

    const editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.value = 'Edit';
    editBtn.onclick = () => {
        localStorage.removeItem(myObj.description);
        ul.removeChild(li);

        document.getElementById('Expense').value = myObj.expense;
        document.getElementById('Description').value = myObj.description;
        document.getElementById('Category').value = myObj.category;
    }

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    ul.appendChild(li);
}