function onsignup(event){
    event.preventDefault();

    const name = event.target.myName.value;
    const email = event.target.exampleInputEmail1.value;
    const tel = event.target.tel.value;

    myObj = {
        "Name": name,
        email,
        'Phone': tel,
    }

    const strObj = localStorage.setItem(myObj.email, JSON.stringify(myObj));

    screenFunc(myObj);
}

function screenFunc(myObj){
    const ul = document.getElementById('listOfItems');

    const childEle = document.createElement('li');
    childEle.innerHTML = JSON.stringify(myObj);

    // 'input' tag and onclick method
    const delBtn = document.createElement('input');
    delBtn.type = 'button';
    delBtn.value = 'Delete';
    delBtn.onclick = () => {
        localStorage.removeItem(myObj.email);
        ul.removeChild(childEle);
    }

    const editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.value = "Edit";
    editBtn.onclick = () => {
        localStorage.removeItem(myObj.email);
        ul.removeChild(childEle);

        // below code is only new to that of the delete button
        // is code k vagah se vo written me values form me aa jaayegi
        document.getElementById('myName').value = myObj['Name'];
        document.getElementById('exampleInputEmail1').value = myObj.email;
        document.getElementById('tel').value = myObj['Phone'];
    }


    childEle.append(editBtn);
    childEle.append(delBtn);
    ul.appendChild(childEle);

    
}