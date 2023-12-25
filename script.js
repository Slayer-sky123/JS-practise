// <=====================To Do List========================>
document.addEventListener('DOMContentLoaded', () => {
    let addBtn = document.querySelector('#addBtn');
    addBtn.addEventListener('click', () => {
        let inputF = document.querySelector('#inputField');
        let newItem = document.createElement('li');
        let parentDiv = document.querySelector('#parent_div');
        if (inputF.value === "") {
            inputF.placeholder = "Field is empty!!";
        }
        else {
            parentDiv.appendChild(newItem);
            newItem.innerText = inputF.value;
            inputF.value = "";
        }
        // if (inputF.value === "") {
        //     inputF.placeholder = "Field is blank!";
        // }
        // else {
        //     paragraph.innerText = inputF.value;
        //     inputF.value = "";
        // }
    })
})
