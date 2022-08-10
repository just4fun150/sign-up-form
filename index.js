
const pass = document.getElementById('pwd');
const confirmPass = document.getElementById('confirm-pwd');
const errorMessage = document.getElementById('errMessage');



confirmPass.addEventListener('keyup', (e) =>
{
    validatePass(e.target.value);
});



function validatePass(e)
{
    pass.classList.remove('error');
    confirmPass.classList.remove('error');
    pass.classList.remove('passed');
    confirmPass.classList.remove('passed');

    if (pass.value != confirmPass.value)
    {
        pass.classList.add('error');
        confirmPass.classList.add('error');
        errorMessage.textContent = "* Passwords do not match";
        errorMessage.classList.add('err-message');
    }
    else
    {
        errorMessage.textContent = "";
        pass.classList.add('passed');
        confirmPass.classList.add('passed');
    }


}