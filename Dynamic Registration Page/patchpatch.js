function onsignup(event) {
    event.preventDefault();

    const expense = event.target.Expense.value;
    const description = event.target.Description.value;
    const category = event.target.Category.value;

    const myObj = {
        expense,
        description,
        category
    };

    axios.post('https://crudcrud.com/api/35837f618b0a4848a71dbb7fd1565ebf/ExpenseTracker', myObj)
        .then((response) => {
            onScreenFunction(myObj);
            console.log(response);
        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + '<h4>Kuchh toh Gadbad Hain Daya</h4>';
            console.log(err);
        });
}

function onScreenFunction(myObj) {
    const ul = document.getElementById('onScreenItems');
    const li = document.createElement('li');
    li.innerHTML = JSON.stringify(myObj);

    const delBtn = document.createElement('input');
    delBtn.type = 'button';
    delBtn.value = 'Delete';
    delBtn.onclick = () => {
        axios.delete(`https://crudcrud.com/api/35837f618b0a4848a71dbb7fd1565ebf/ExpenseTracker/${myObj._id}`)
            .then(() => {
                ul.removeChild(li);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.value = 'Edit';
    editBtn.onclick = () => {
        ul.removeChild(li);
        document.getElementById('Description').value = myObj.description;
        document.getElementById('Category').value = myObj.category;
        document.getElementById('Expense').value = myObj.expense;

        const updateBtn = document.createElement('input');
        updateBtn.type = 'button';
        updateBtn.value = 'Update';
        updateBtn.onclick = () => {
            const updatedExpense = document.getElementById('Expense').value;
            const updatedDescription = document.getElementById('Description').value;
            const updatedCategory = document.getElementById('Category').value;

            const updatedObj = {
                expense: updatedExpense,
                description: updatedDescription,
                category: updatedCategory
            };

            axios.patch(`https://crudcrud.com/api/35837f618b0a4848a71dbb7fd1565ebf/ExpenseTracker/${myObj._id}`, updatedObj)
                .then((response) => {
                    onScreenFunction(response.data);
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        li.appendChild(updateBtn);
    };

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    ul.appendChild(li);
}
