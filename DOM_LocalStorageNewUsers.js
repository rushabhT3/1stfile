function onsignup(event){
    event.preventDefault();

    const name = event.target.myName.value;
    const email = event.target.exampleInputEmail1.value;
    const tel = event.target.tel.value;

    // object kisibhi form me bana sakte ek key-value pair me banaya maine aur 2 just variables me
    const myObj = {
        "Name": name,
        email,
        tel,
    }

    localStorage.setItem(myObj.email, JSON.stringify(myObj));

    showUsersOnTheScreen(myObj);
}
function showUsersOnTheScreen(myObj){
    const paraEle = document.getElementById("listOfItems");
    const childEle = document.createElement("li");

    // below is a string
    childEle.textContent = myObj["Name"] + "--" + myObj.email + "--" + myObj.tel;
    paraEle.appendChild(childEle);
}