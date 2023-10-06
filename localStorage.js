

const toggle = document.querySelector('.toggleBtn');

toggle.addEventListener('click', () => {
    if(localStorage.getItem('blackTheme') === 'false'){
        document.body.style.backgroundColor = 'Black';
        localStorage.setItem('blackTheme', true)
    } else {
        document.body.style.backgroundColor = 'White'
        localStorage.setItem('blackTheme', false)
    }
})


localStorage.setItem('key1', 123);
localStorage.setItem('key2', 'String');
localStorage.setItem('blackTheme', false);

