// console.dir(document);
// console.log(document.all);

// console.log(document.title);
let c = document.getElementById("header-title");
let m = document.getElementById("main-header");
console.log(c);
c.textContent = "my name is John Wick";
m.style.borderBottom = "solid 3px #000";
console.log(c.innerText);

// following line gives items as the html list and then we can choose the items like array and make changes
let items = document.getElementsByClassName("list-group-item");
console.log(items);
items[1].style.fontWeight = "bold";
items[1].style.color = "green";


