const form = document.getElementById('form');
const add = document.getElementById('add');
add.addEventListener("click", (preD) => {
  preD.preventDefault();
  const emailInputs = form.querySelectorAll('.email-input');
  if(emailInputs.length < 5) {
    const newinput = document.createElement('input');
    newinput.type = 'email';
    newinput.placeholder = 'Enter Email Address';
    newinput.classList.add('email-input');
    newinput.value = 'demo@mail.com';
    newinput.required = true;
    form.insertBefore(newinput, add);
  }
  else {
    document.getElementById('stop').innerHTML = 'Stop Add';
  }
});