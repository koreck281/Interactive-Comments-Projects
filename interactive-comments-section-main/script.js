

let send = document.querySelector("#send");
let comments_section = document.querySelector("#comment_section")
send.addEventListener('click',addComments)

function addComments(){
    let counter = 0
    val = document.getElementById("textbox").value
    console.log(val)
    comments_section.innerHTML += "<div class='comment'><div id='votes'>" +
    "<button><img src='http://localhost:8000/images/icon-plus.svg' class='vote'></button>" + counter +
    "<button><img src='http://localhost:8000/images/icon-minus.svg'class='vote'></button></div>"+
     "<p>"+ val +"<p/>" + "<button id='reps'><img src='http://localhost:8000/images/icon-reply.svg' ></button></div>"

}



// Scroll to top button

let btn1 = document.querySelector("#to_top")
function scrll() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn1.style.display = "block";

    }
    else {
        btn1.style.display = "none";
    }

}

window.onscroll = function () {
    scrll();
}

function scrolltoTop() {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

btn1.addEventListener('click', scrolltoTop);


//Dark mode button
let btn2 = document.querySelector("#dark_mode");

function darkmode() {
    const darkMode = document.querySelector("body");
    darkMode.classList.toggle("dark-mode");
}

function storageCheck() {
    let darkMode = localStorage.getItem('dark-mode') === 'true';
    localStorage.setItem('dark-mode', !darkMode);

    if (darkMode) {
        darkmode();
    }
    else {
        darkmode();
    }
}

if (localStorage.getItem('dark-mode') === 'true') {
    darkmode()
}

btn2.addEventListener("click", storageCheck);