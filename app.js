const addButton = document.querySelector('.add-button');
var inputValue = document.querySelector('.input');
const container = document.querySelector('.container');

class item {
    constructor(itemName) {
        //creating the item div
        this.createDiv(itemName);
    }
    createDiv(itemName) {
        let input = document.createElement('.input');
        input.value = itemValue;
        input.disabled = true;
        input.classList.add('.item-input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        
        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('edit-button');
        
        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('remove-button');

        container.appendChild(itemBox);

        itemBox.appendChild(inputValue);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', ()=>this.edit(inputValue));
        removeButton.addEventListener('click', ()=>this.remove(itemBox));
    }
    edit(input) {
        input.disabled = !input.disabled;
    }
    remove(item) {
        container.removeChild(item);
    }
}

check = () => {
    if(inputValue != "") {
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown',(e) => {
    if(e.which == 13) check();
});

new item("todo");













