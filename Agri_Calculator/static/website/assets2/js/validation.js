
const form = document.getElementById('form');
const user = document.getElementById('user');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const conpass = document.getElementById('conpass');

//show error massage
function showError(input, massage){
    const formControl = input.parentElement;
}

//event listeners

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(user.value === ''){
        showError(user, "Username is required"); 
    }
    else{
        showSuccess(user);
    }
})