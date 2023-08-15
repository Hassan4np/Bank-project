document.getElementById('loginid').addEventListener('click', function() {
    const useremail = document.getElementById('user-email').value;
    const userPass = document.getElementById('user-password').value;
    if (useremail === 'hasan@gmail.com' && userPass === '123') {
        window.location.href = "bank.html";
    } else {
        alert("Sorry your password is woring");
    }
})