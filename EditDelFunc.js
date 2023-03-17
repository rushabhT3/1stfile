var form = document.querySelector("#addForm");
var itemList = document.querySelector("#items");

form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);

function addItem(e){
    e.preventDefault();

    var newItem = document.querySelector("#item").value;

    // create new li element
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));

    // create the DeleteButton
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode('x'));

    // append button to li
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains("delete")){
        if(confirm("are you sure?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}