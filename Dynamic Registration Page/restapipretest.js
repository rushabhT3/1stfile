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

    if (expense && description && category) {
        axios.post(`https://crudcrud.com/api/64aad991ca00405fb318d2d2983e058e/ExpenseTracker`, myObj)
            .then((resolve) => {
                onScreenFunction(myObj);
                console.log(resolve);
            })
            .catch((err) => {
                console.error(err);
            })
    } else[
        alert('Kindly fill the values')
    ]
}

document.addEventListener('DOMContentLoaded', () => {
    axios.get(`https://crudcrud.com/api/64aad991ca00405fb318d2d2983e058e/ExpenseTracker`)
        .then((resolve) => {
            resolve.data.forEach(element => {
                onScreenFunction(element);
            })
        })
        .catch((err) => {
            console.error(err);
        })
})

function onScreenFunction(myObj) {
    const ul = document.getElementById('listOnScreen');

    const li = document.createElement('li');
    li.innerHTML = JSON.stringify(`${myObj.expense}--${myObj.description}--${myObj.category}`);

    const delBtn = document.createElement('input');
    delBtn.value = 'Delete';
    delBtn.type = 'button';
    delBtn.onclick = () => {
        axios.delete(`https://crudcrud.com/api/64aad991ca00405fb318d2d2983e058e/ExpenseTracker/${myObj._id}`)
            .then(() => {
                ul.removeChild(li);
            })
            .catch((err) => {
                console.error(err);
            })
    }
    const editBtn = document.createElement('input');
    editBtn.value = 'Edit';
    editBtn.type = 'button';
    editBtn.onclick = () => {

        document.getElementById('Expense').value = myObj.expense;
        document.getElementById('Category').value = myObj.category;
        document.getElementById('Description').value = myObj.description;

        axios.delete(`https://crudcrud.com/api/64aad991ca00405fb318d2d2983e058e/ExpenseTracker/${myObj._id}`)
            .then(() => {
                ul.removeChild(li);
            })
            .catch((err) => {
                console.error(err);
            })
    }
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    ul.appendChild(li);
}