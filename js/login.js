document.addEventListener("DOMContentLoaded", function(e){
    let storedUname = localStorage.getItem('uname');

    if(storedUname) {
        alert('Ya estás logueado.');
        window.location.replace("inicio.html");
        console.log('usuario: '+ uname.value)
    }
});


function login() {
    let uname = document.getElementById('uname');
    let storedUname = localStorage.getItem('uname');

    if(uname.value == storedUname) {
        alert('Ya estás logueado.');
        console.log('usuario: '+ uname.value)
    }else {
        let uname = document.getElementById('uname');
        localStorage.setItem('uname', uname.value);
    }

}
