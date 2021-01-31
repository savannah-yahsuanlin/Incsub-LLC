window.onload = () => { 

    var email = document.getElementsByClassName("email")[0];

    email.addEventListener('change', validateEmail, false);

    function validateEmail(email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var theEmail = this.value;
        var email = document.getElementsByClassName('email')[0];
        var eyeIcon = document.getElementsByClassName('eyeIcon')[0];
        var floatingEmail = document.getElementsByClassName('floating-email')[0];
        var message = document.getElementById('message');

        if (reg.test(theEmail)) {
            email.removeAttribute('id');
            eyeIcon.style.display = 'none';
            floatingEmail.style.color = 'gray';  
            email.style.backgroundColor = 'light-gray!important';
            message.innerHTML = '';
            return true;
        } else {
            email.setAttribute('id', 'error');
            eyeIcon.style.display = 'block';
            floatingEmail.style.color = 'red';
            message.innerHTML = 'Please enter a valid email address';
            email.focus();
            return false;
        }
    }    

    var pwd = document.getElementsByClassName('password')[0];

    pwd.addEventListener('change', validPwd, false);

    function validPwd() {
        if(pwd.value.length <= 8) {
            document.getElementById('pwdHint').style.color = 'red';
            pwd.focus();
            return false;
        } else {
            document.getElementById('pwdHint').style.color = 'gray';
            return true;
        }  
    }

    let theForm = document.forms.theForm;

    theForm.addEventListener("submit", valid, false);

    function valid(email, pwd) {
        var email = document.getElementsByClassName("email")[0];
        var pwd = document.getElementsByClassName('password')[0];
        var submit = document.getElementById('submit');
        var theEmail = email.value;
        var thePwd = pwd.value;
        if(theEmail.length === 0 && thePwd.length === 0){
            alert("Please fill up email or password box.");
            submit.setAttribute('class', 'error');
            return false;
        } else {
            submit.style.backgroundColor = 'blue';
            submit.style.color = 'white';
            event.preventDefault();
        }
    }
}

