let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};

window.onscroll = () => {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}

// Email js
function validation(){
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        }else{
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}

validation();

function sendmail(name,email,msg){
    emailjs.send("service_k3m1539","template_dpxvkd3",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}

function emptyerror(){
    swal({
        title: "Error!",
        text: "Field can not be empty!",
        icon: "error",
      });
}

function success(){
    swal({
        title: "Email send successfully!",
        text: "Thank You",
        icon: "success",
      });
}
// Email js End here

// Header background change while scrolling
let Header = document.querySelector('header');

window.addEventListener('scroll', () => {
    Header.classList.toggle('header-active',window.scrollY > 0);
});

// Scroll top

let scrollTop = document.querySelector('.top-scroll');

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active',window.scrollY > 0);
});


// Typing animation
var typed = new Typed(".Type", {
    strings: ["Web Designer","BackEnd Developer","Full-Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});