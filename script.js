const emailInput = document.getElementById('email-input');
const validEmail = document.getElementById('valid-email');
const button = document.getElementById('btn');
const dismiss = document.getElementById('btn-2');
const displayEmailUser = document.getElementById('email-user');
const succesSign = document.querySelector('.box');
const successCard = document.querySelector('.subscrib');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const emailRegx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})([\.a-z]{2,8})?$/ig;
  if (emailRegx.test(emailInput.value)) {
      succesSign.style.display = 'none' ;
      successCard.style.display = 'block';
      displayEmailUser.textContent = emailInput.value;
  }else{
      validEmail.textContent = 'Valid email required';
      document.querySelector(".error-").classList.add("error");
  }
});

dismiss.addEventListener('click',()=>{
  successCard.style.display = 'none' ;
  succesSign.style.display = 'flex';
  emailInput.value = '';
  validEmail.textContent = '';
  document.querySelector(".error-").classList.remove("error");
})
