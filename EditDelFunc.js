var form = document.querySelector("#addForm");
var itemList = document.querySelector("#items");
var filter = document.getElementById("filter");

form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);

// filter event: listens to the keyup and then call the filterItems Function
filter.addEventListener("keyup", filterItems);

// e is the event parameter
function addItem(e) {
    e.preventDefault();

    // make input lo ek new id diye #item and usko utha liye
    var newItem = document.getElementById("item").value;
    var newDescript = document.getElementById("description").value;

    // create new li element and add classname and value of the newItem inside it
    var li = document.createElement("li");
    li.className = "list-group-item";

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" "+newDescript));

    // create the edit button
    var editBtn = document.createElement("button");
    editBtn.className = "btn btn-info btn-sm float-right edit";
    editBtn.appendChild(document.createTextNode("Edit"));

    li.appendChild(editBtn);

    // create the DeleteButton
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode('X'));

    // append button to li bcz the delete button is inside of li
    li.appendChild(deleteBtn);


    itemList.appendChild(li);
}

function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        if (confirm("are you sure?")) {
            var li = e.target.parentElement;
            // parentElement of the red cross is the element itself
            itemList.removeChild(li);
        }
    }
}

// filter the items
function filterItems(e) {
    // convert text to the lower case
    var text = e.target.value.toLowerCase();

    // Get html collections of the tag "li"
    var items = itemList.getElementsByTagName("li");
    

    // convert to the array from the html collections
    Array.from(items).forEach(function (item) {

        var itemName = item.firstChild.textContent;
        // can use var or const as well
        const descriptionName = item.childNodes[1].textContent;

        if (itemName.toLowerCase().indexOf(text) != -1 || descriptionName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });
}