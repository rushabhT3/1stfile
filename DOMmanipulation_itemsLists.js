// console.dir(document);
// console.log(document.all);

// console.log(document.title);
let c = document.getElementById("header-title");
let m = document.getElementById("main-header");
console.log(c);
c.textContent = "John Wick killer items";
m.style.borderBottom = "solid 3px #000";
console.log(c.innerText);

// following line gives items as the html list and then we can choose the items like array and make changes
// let items = document.getElementsByClassName("list-group-item");
let items = document.getElementsByTagName("li");
console.log(items);
items[1].style.fontWeight = "bold";
items[1].style.color = "green";

items[2].style.backgroundColor = "green";

for (let i = 0; i < items.length; i++){
    items[i].style.fontWeight = "bold"
}


