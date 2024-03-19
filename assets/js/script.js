
$(document).ready(function(){
    $('[data-toggle="tooltip"]'). tooltip();
        });


    document.addEventListener("DOMContentLoaded", makeLinksSmooth);
    function makeLinksSmooth() { 
        const navLinks = document.querySelectorAll("nav-item a"); 
        navLinks.forEach((link) => {
            link.addEventListener("click", smoothScroll);
        });
        }
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) { 
            targetElement.scrollIntoView({ behavior: "smooth", });
        }
        }
    targetElement.scrollIntoView({ behavior: "smooth", block: "end" }); 