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
        axios.post(`https://crudcrud.com/api/64aad991ca00405fb318d2d2983e058e/SastaFlipkart`, myObj)
            .then(() => {
                onScreenFunction(myObj);
            })
    } else {
        alert('Enter All the Details')
    }
}
document.addEventListener('DOMContentLoaded', () => {
    axios.get(`https://crudcrud.com/api/64aad991ca00405fb318d2d2983e058e/SastaFlipkart`)
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
        axios.delete(`https://crudcrud.com/api/64aad991ca00405fb318d2d2983e058e/SastaFlipkart/${myObj._id}`)
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
            .catch((err) => {
                console.error(err);
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