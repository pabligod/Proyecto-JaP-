document.addEventListener("DOMContentLoaded", function(e){

    let storedUname = localStorage.getItem('uname');
    console.log('Usuario:' + storedUname);

    let profile = document.getElementById('profile');

    profile.innerHTML =`

    <a class="btn dropdown-toggle text-white" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ` + storedUname +`
    </a>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#" onClick="logout()">Salir</a>
    </div>`
});


function logout(){
    localStorage.clear();
    window.location.replace("index.html");
}
