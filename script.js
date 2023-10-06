

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');


if(localStorage.getItem('isChecked')){
    checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

if(localStorage.getItem('bg') === 'changed'){
    form.style.backgroundColor = "pink";
}


change.addEventListener('click', () => {
    if(localStorage.getItem('bg') === 'changed'){
        localStorage.removeItem('bg');
        form.style.backgroundColor = "white";
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = "gray";
    }
})


const person = {
    name: 'Name',
    age: 30
}

const serializedPerson = JSON.stringify(person);
localStorage.setItem('person', serializedPerson);
console.log(localStorage.getItem('person'));


