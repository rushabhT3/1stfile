var form = document.querySelector("#addForm");
var itemList = document.querySelector("#items");

form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);

// e is the event parameter
function addItem(e){
    e.preventDefault();

    // make input lo ek new id diye #item and usko utha liye
    var newItem = document.getElementById("item").value;

    // create new li element and add classname and value of the newItem inside it
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));

    // create the DeleteButton
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode('x'));

    // append button to li bcz the delete button is inside of li
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains("delete")){
        if(confirm("are you sure?")){
            var li = e.target.parentElement;
            // parentElement of the red cross is the element itself
            itemList.removeChild(li);
        }
    }
}