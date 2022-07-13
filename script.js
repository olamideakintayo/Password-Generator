function genpassword() {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let result = document.getElementById("result");
    let passwordLength = document.getElementById("slider");
    let output = document.getElementById("demo")
    output.innerHTML = slider.value;
    slider.oninput = function () {
        output.innerHTML = this.value;
    }

    let password = "";

    for (let i = 0; i < passwordLength.value; i++) {
        let random = Math.floor(Math.random() * characters.length + 1);
        password += characters.charAt(random);
    }
    result.value = password;
}


function copypassword() {
    let copyText = document.getElementById("result");
    copyText.select();
    document.execCommand("copy");
    alert("Password Copied");
}