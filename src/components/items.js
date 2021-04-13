const itemListContainer = document.getElementById("item-list");

export function createToDoItem(name,checked) {
    const container = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checked;
    const text = document.createElement("p");
    text.innerText = name;
    const remove = document.createElement("img");
    remove.src = "delete.png";
    remove.classList.add("remove-button");

    container.appendChild(checkbox);
    container.appendChild(text);
    container.appendChild(remove);

    return container;
}

export function createToDoItemList(todoList){
    itemListContainer.innerHTML = "";
    for (const itemData of todoList)   {
        const item = createToDoItem(itemData.item, itemData.checked)
        itemListContainer.appendChild(item);
    }
}