let arr = [];

const jsonData = localStorage.getItem('items');

if(jsonData != null) {
    arr = JSON.parse(jsonData);
    displayItem();
}

function addItem() {
    const name = document.querySelector('.item').value;
    const date = document.querySelector('.date').value;
    if(name === '' || date === '') {
        return;
    }
    arr.push({
        name: name,
        date: date
    });
    localStorage.setItem('items', JSON.stringify(arr));
    document.querySelector('.item').value = '';
    document.querySelector('.date').value = '';
    displayItem();
}

function displayItem() {
    const listContainer = document.querySelector('.list');
    listContainer.innerHTML = '';

    arr.map((value, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.style = ""
        taskDiv.innerHTML = `
        <p>${value.name} (${value.date})</p>
        <button onclick="deleteItem(${index})">Delete</button>`

        listContainer.appendChild(taskDiv);
    })
}

function deleteItem(index) {
    arr.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(arr));
    displayItem();
}