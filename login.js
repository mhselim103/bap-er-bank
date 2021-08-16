document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // get user password

    const userPassword = document.getElementById('user-password');
    passwordValue = userPassword.value;
    // console.log(userPassword);


    // validation 

    if (userEmail == 'mhselim103@gmail.com' && passwordValue == 'secret') {
        // console.log('valid user');
        window.location.href= ('banking.html')    // login korar por main page e niye jawa 
    }
})


