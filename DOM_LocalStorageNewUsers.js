function onsignup(event){
    event.preventDefault();

    const name = event.target.myName.value;
    const email = event.target.exampleInputEmail1.value;
    const tel = event.target.tel.value;

    myObj = {
        "Name": name,
        'Email': email,
        'Phone': tel,
    }

    const strObj = localStorage.setItem(myObj['Email'], JSON.stringify(myObj));

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
        localStorage.removeItem(myObj['Email']);
        ul.removeChild(childEle);
    }

    childEle.append(delBtn);
    ul.appendChild(childEle);

    
}