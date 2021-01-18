var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var danger = document.getElementById('danger');
//submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItem);

//delete All event
danger.addEventListener('click', deleteAll);
function addItem(e) {
    e.preventDefault();

    //getInputValue
    var newInput = document.getElementById('input_item').value;
    if(newInput === '')
    return {
        error: true,
        message: 'Parameter needed'
    }
    //Create new Element
    var newList = document.createElement('li');
    newList.className = 'list-group-items card card-body p-3';
    newList.appendChild(document.createTextNode(newInput));
    itemList.appendChild(newList);

    var but = document.createElement('button');
    but.className = 'btn btn-danger btn-sm float-right delete';
    but.appendChild(document.createTextNode('X'));
    newList.appendChild(but);

    document.getElementById('input_item').value = '';
}

function removeItem(e) {
    if(e.target.classList.contains('delete')) {
         
            var d = e.target.parentElement;
            itemList.removeChild(d);
        
    }
}

function filterItem(e) {

    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByClassName('list-group-items');
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })
}

function deleteAll() {
    if(!confirm("Deleting ALL Items!"))
    return;
    var child = itemList.lastElementChild;
    while(child) {
        itemList.removeChild(child);
        child = itemList.lastElementChild;
    }
}