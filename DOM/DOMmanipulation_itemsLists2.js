var itemsList = document.querySelector("#items");

// parentNode or the parentElement
console.log(itemsList.parentElement);
itemsList.parentElement.style.backgroundColor = "#f4f4f4";

// lastelementchild
itemsList.lastElementChild.style.color = "green";

// firstChild and lastChild also firstElementChild and lastElementChild
itemsList.lastElementChild.textContent = "This is the last one";

// createchild

// nextsibling, previoussibling and nextelementsibling, previouselementsibling
console.log(itemsList.nextSibling);
itemsList.previousElementSibling.style.color = "blue";

// createelement
var newDiv = document.createElement("div");
newDiv.className = "divName";
newDiv.id = "specialID";
console.log(newDiv);

// setAttribute
newDiv.setAttribute("title", "hello div");

// createtesxtnode 
var newDivText = document.createTextNode("HEllo world");

// appendchild // add text to div 
newDiv.appendChild(newDivText);
var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

// container is the parent class of the h1 and b4 h1 newDiv ko daalna hain
container.insertBefore(newDiv, h1);

var cement = document.querySelector(".list-group-item");
var ul = document.querySelector(".list-group");

// niche ka delete krna padega uppr me hello world k liye
ul.insertBefore(newDiv, cement);

console.log(newDivText);