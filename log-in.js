document.getElementById('log-in-btn').addEventListener('click', function(){
    const mailField = document.getElementById('user-mail');
    const userMail = mailField.value;

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userMail == "new@hotel" && userPassword == "1234")
        // console.log('valid user');
        window.location.href='home.html';
});