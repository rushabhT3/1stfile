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

    // localStorage.setItem(myObj.description, JSON.stringify(myObj));
    axios.post('https://crudcrud.com/api/5eb35da1b0cc4728a7119b6b9084b5de/ExpenseTrackerNew', myObj)
        .then((resolve) => {
            onScreenFunction(myObj);
            console.log(resolve);
        })
        .catch((err) => {
            console.error(err);
        })
    // onScreenFunction(myObj);
}

document.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/5eb35da1b0cc4728a7119b6b9084b5de/ExpenseTrackerNew')
        .then((response) => {
            console.log(response);
            response.data.forEach((element) => {
                onScreenFunction(element)
            })
        })
        .catch((err) => {
            console.error(err)
        })
})
// Object.keys(localStorage).forEach((item) => {
//     onScreenFunction(JSON.parse(localStorage[item]));
// })
// })

function onScreenFunction(myObj) {
    const ul = document.getElementById('listOnScreen');

    const li = document.createElement('li');
    li.innerHTML = JSON.stringify(myObj);

    const delBtn = document.createElement('input');
    delBtn.value = 'Delete';
    delBtn.type = 'button';
    delBtn.onclick = () => {
        //     localStorage.removeItem(myObj.description);
        //     ul.removeChild(li);
        // }
        const url = `https://crudcrud.com/api/5eb35da1b0cc4728a7119b6b9084b5de/ExpenseTrackerNew/${myObj._id}`;
        axios.delete(url)
            .then(() => {
                ul.removeChild(li);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const editBtn = document.createElement('input');
    editBtn.value = 'Edit';
    editBtn.type = 'button';
    editBtn.onclick = () => {
        // localStorage.removeItem(myObj.description);
        // ul.removeChild(li);

        // document.getElementById('Expense').value = myObj.expense;
        // document.getElementById('Description').value = myObj.description;
        // document.getElementById('Category').value = myObj.category;

        };

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    ul.appendChild(li);
}

// function onScreenFunction(myObj) {
//     const ul = document.getElementById('listOnScreen');
  
//     const li = document.createElement('li');
//     li.innerHTML = JSON.stringify(myObj);
  
//     const delBtn = document.createElement('input');
//     delBtn.value = 'Delete';
//     delBtn.type = 'button';
//     delBtn.onclick = () => {
//       const url = `https://crudcrud.com/api/5eb35da1b0cc4728a7119b6b9084b5de/ExpenseTrackerNew/${myObj._id}`;
//       axios
//         .delete(url)
//         .then(() => {
//           ul.removeChild(li);
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     };
  
//     const editBtn = document.createElement('input');
//     editBtn.value = 'Edit';
//     editBtn.type = 'button';
//     editBtn.onclick = () => {
//       // populate input fields with current object data
//       document.getElementById('Expense').value = myObj.expense;
//       document.getElementById('Description').value = myObj.description;
//       document.getElementById('Category').value = myObj.category;
  
//       // create save button for updating object
//       const saveBtn = document.createElement('input');
//       saveBtn.value = 'Save';
//       saveBtn.type = 'button';
//       saveBtn.onclick = () => {
//         const updatedObj = {
//           expense: document.getElementById('Expense').value,
//           description: document.getElementById('Description').value,
//           category: document.getElementById('Category').value,
//         };
//         const url = `https://crudcrud.com/api/5eb35da1b0cc4728a7119b6b9084b5de/ExpenseTrackerNew/${myObj._id}`;
//         axios
//           .put(url, updatedObj)
//           .then(() => {
//             // update li with updated object data
//             li.innerHTML = JSON.stringify(updatedObj);
//             // remove save button and re-add edit button
//             li.removeChild(saveBtn);
//             li.appendChild(editBtn);
//           })
//           .catch((err) => {
//             console.error(err);
//           });
//       };
  
//       // replace edit button with save button
//       li.removeChild(editBtn);
//       li.appendChild(saveBtn);
//     };
  
//     li.appendChild(editBtn);
//     li.appendChild(delBtn);
//     ul.appendChild(li);
//   }
  