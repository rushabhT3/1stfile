function onsignup(event) {
    event.preventDefault();

    const expense = event.target.Expense.value;
    const description = event.target.Description.value;
    const category = event.target.Category.value;

    myObj = {
        expense,
        description,
        category
    }

    localStorage.setItem(myObj.description, JSON.stringify(myObj));
    // axios.post('https://crudcrud.com/api/8698eee5e4814082a368daea09a48/ExpenseTracker', myObj)
    //     .then((response) => {
    //         onScreenFunction(myObj);
    //         console.log(response);
    //     })
    //     .catch((err) => {
    //         document.body.innerHTML = document.body.innerHTML + '<h4>Kuchh toh Gadbad Hain Daya</h4>';
    //         console.log(err);
    //     })
    onScreenFunction(myObj);
}

document.addEventListener('DOMContentLoaded', () => {
    Object.keys(localStorage).forEach((item) => {
        onScreenFunction(JSON.parse(localStorage[item]));
    })
})

function onScreenFunction(myObj) {

    const ul = document.getElementById('listOfItems');

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

        document.getElementById('Description').value = myObj.description;
        document.getElementById('Category').value = myObj.category;
        document.getElementById('Expense').value = myObj.expense;
    }

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    ul.appendChild(li);
}