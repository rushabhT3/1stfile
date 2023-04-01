console.log("my place this is and only mine");

// single item selector
console.log(document.getElementById("users"));

const form1 = document.getElementById("users");
console.log(form1);

console.log(document.querySelector("h4"));


// multiple items selectors
console.log(document.querySelectorAll(".item"))     // this is a node js list       //id kisiki bhi search kr sakta ye
console.log(document.querySelectorAll(".item")[1]) //can use array logic on this

console.log(document.getElementsByClassName("item"))    
//ye html list deta, different operations and since search by class diya hain toh "." lagane ki jaroot nhi

console.log("by tag name",document.getElementsByTagName("li"))    

const kurwa = document.querySelectorAll(".item");
kurwa.forEach((item) => console.log(item));

const one = document.querySelector(".items")
// one.remove();                              //to remove the .item wali har cheez toh hamari list removed thi
// one.lastElementChild.remove();               // to remove the last element 
one.firstElementChild.textContent = "Hola"
one.children[1].innerText = "Brad";
one.lastElementChild.innerHTML = "<h2> MINE </h2>"



const two = document.querySelector(".item1");
two.style.color = "blue";

const three = document.querySelector(".item2");
three.style.color = "yellow";