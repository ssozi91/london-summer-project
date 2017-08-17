function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function validator() {
    var fields = [];

    if (!validateName()) {
        fields.push('name')
    }
    if (!validateEmail()) {
        fields.push('email')
    }
    if (fields.length > 0) {
        alert("invalid field " + fields.join(" and "));
        return false;
    } else {
        return true;
    }
}
function validateName() {
    var value = document.getElementById("name").value;

    if (value == "") {
        return false;
    } else {
        return true;
    }
}

function validateEmail() {
    var value = document.getElementById("email").value;
    if (value == "" || value.indexOf("@") < 0) {
        return false;
    } else {
        return true;
    }
}