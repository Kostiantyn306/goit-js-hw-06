
const form = document.querySelector('.login-form');
const inputValue = document.querySelectorAll('input')

form.addEventListener('submit', onSerch)

function onSerch (evt) {
    evt.preventDefault()
    const {email, password} = evt.currentTarget.elements
    if (!email.value || !password.value) {
       
      return  alert('Enter the your data!')
    }

   const data = {
    login: email.value,
    password: password.value
    
   } 

   evt.currentTarget.reset()
      console.log(data)

}
