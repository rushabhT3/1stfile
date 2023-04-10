function onsignup(event){
    // functionName.preventDefault() values ko retain rakhne k liye 
    event.preventDefault();
    // console panel me browser k dekh sakte ye kya optput de rha hain toh
    console.log(event.target.myName.value);
}

// let key = prompt("key please");
// let value = prompt("value please");

// localStorage.setItem(key, value);
// console.log('${key} is present and the value is ${value}');