async function onSignUp(event) {
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
        try {
            const response = await axios.post(`https://crudcrud.com/api/b6697b95144b49ba9007cb8f5b5a2a17/SastaFlipkart`, myObj);
            const newObj = response.data;
            onScreenFunction(newObj);
        } catch (error) {
            console.error(error);
        }
    } else {
        alert('Enter All the Details')
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const resolve = await axios.get(`https://crudcrud.com/api/b6697b95144b49ba9007cb8f5b5a2a17/SastaFlipkart`);
        resolve.data.forEach(element => {
            onScreenFunction(element);
        });
    } catch (error) {
        console.error(error);
    }
});

async function onScreenFunction(myObj) {
    const ulElectronics = document.getElementById('Electronics');
    const ulFood = document.getElementById('Food');
    const ulSkinCare = document.getElementById('SkinCare');

    const li = document.createElement('li');
    li.innerHTML = `<small>${myObj.price} - ${myObj.product} - ${myObj.category}</small>`;

    const delBtn = document.createElement('input');
    delBtn.type = 'button';
    delBtn.value = 'Delete Order';
    delBtn.onclick = async () => {
        try {
            await axios.delete(`https://crudcrud.com/api/b6697b95144b49ba9007cb8f5b5a2a17/SastaFlipkart/${myObj._id}`);
            if (myObj.category == 'Electronics') {
                ulElectronics.removeChild(li);
            }
            if (myObj.category == 'Food') {
                ulFood.removeChild(li);
            }
            if (myObj.category == 'Body Care') {
                ulSkinCare.removeChild(li);
            }
        } catch (error) {
            console.error(error);
        }
    }
    li.appendChild(delBtn);

    if (myObj.category == 'Electronics') {
        li.style.fontSize = '16px';
        ulElectronics.appendChild(li);
    }
    if (myObj.category == 'Food') {
        li.style.fontSize = '16px';
        ulFood.appendChild(li);
    }
    if (myObj.category == 'Body Care') {
        li.style.fontSize = '16px';
        ulSkinCare.appendChild(li);
    }
}
