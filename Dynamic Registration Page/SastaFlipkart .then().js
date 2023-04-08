function onSignUp(event) {
    event.preventDefault();

    const price = event.target.Price.value;
    const product = event.target.Product.value;
    const category = event.target.Category.value;

    myObj = {
        price,
        product,
        category
    }

    if (price && product && category) {
        axios.post(`https://crudcrud.com/api/b6697b95144b49ba9007cb8f5b5a2a17/SastaFlipkart`, myObj)
            .then((response) => {
                const newObj = response.data; // use the response to get the entire object
                onScreenFunction(newObj);
            })
    } else {
        alert('Enter All the Details')
    }
}
document.addEventListener('DOMContentLoaded', () => {
    axios.get(`https://crudcrud.com/api/b6697b95144b49ba9007cb8f5b5a2a17/SastaFlipkart`)
        .then((resolve) => {
            resolve.data.forEach(element => {
                onScreenFunction(element);
            });
        })
        .catch((err) => {
            console.error(err);
        })
})
function onScreenFunction(myObj) {
    const ulElectronics = document.getElementById('Electronics');
    const ulFood = document.getElementById('Food');
    const ulSkinCare = document.getElementById('SkinCare');

    const li = document.createElement('li');
    li.innerHTML = `<small>${myObj.price} - ${myObj.product} - ${myObj.category}</small>`;


    

    const delBtn = document.createElement('input');
    delBtn.type = 'button';
    delBtn.value = 'Delete Order';
    delBtn.onclick = () => {
        axios.delete(`https://crudcrud.com/api/b6697b95144b49ba9007cb8f5b5a2a17/SastaFlipkart/${myObj._id}`)
            .then(() => {
                if (myObj.category == 'Electronics') {
                    ulElectronics.removeChild(li);
                }
                if (myObj.category == 'Food') {
                    ulFood.removeChild(li);
                }
                if (myObj.category == 'Body Care') {
                    ulSkinCare.removeChild(li);
                }
            })

    }

    li.appendChild(delBtn);

    if (myObj.category == 'Electronics') {
        ulElectronics.appendChild(li);
    }
    if (myObj.category == 'Food') {
        ulFood.appendChild(li);
    }
    if (myObj.category == 'Body Care') {
        ulSkinCare.appendChild(li);
    }
}