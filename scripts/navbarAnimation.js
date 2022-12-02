window.addEventListener('resize', function () {
    "use strict";
    window.location.reload();
});

const screenSize = window.matchMedia("(min-width: 600px)");

if (screenSize.matches) {
    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            let dyn_navbar = document.getElementById("dynamic-navbar");
            let logo_link = document.getElementById("logo-link");
            let company_logo = document.getElementById("company-logo");
            let items = document.getElementsByClassName("nav-link");
            for (let i = 0; i < items.length; i++) {
                items[i].style.fontSize = "20px";
            }

            document.getElementById("apply-now-text").style.fontSize = "20px";
            document.getElementById("apply-now-text").style.width = "160px";
            dyn_navbar.style.height = '10%';
            dyn_navbar.style.transition = "0.5s";
            dyn_navbar.style.opacity = "1.0";
            dyn_navbar.style.fontSize = "20px";
            logo_link.style.marginLeft = "4rem";
            logo_link.style.marginRight = "0rem";
            logo_link.style.paddingLeft = "0rem";
            logo_link.style.paddingRight = "0rem";
            logo_link.style.transition = "0.5s";
            company_logo.style.width = "210px";
            company_logo.style.height = "50.4px";
            company_logo.style.margin = "1rem";
            company_logo.style.transition = "0.5s";
        } else {
            let dyn_navbar = document.getElementById("dynamic-navbar");
            let logo_link = document.getElementById("logo-link");
            let company_logo = document.getElementById("company-logo");
            let items = document.getElementsByClassName("nav-link");
            for (let i = 0; i < items.length; i++) {
                items[i].style.fontSize = "25px";
            }

            document.getElementById("apply-now-text").style.fontSize = "25px";
            document.getElementById("apply-now-text").style.width = "280px";
            dyn_navbar.style.height = '70%';
            dyn_navbar.style.transition = "0.5s";
            dyn_navbar.style.opacity = "1.0";
            dyn_navbar.style.fontSize = "25px";
            logo_link.style.marginLeft = "3rem";
            logo_link.style.marginRight = "3rem";
            logo_link.style.paddingLeft = "3rem";
            logo_link.style.paddingRight = "3rem";
            logo_link.style.transition = "0.5s";
            company_logo.style.width = "300px";
            company_logo.style.height = "72px";
            company_logo.style.margin = "1rem 0rem 1rem 0rem";
            company_logo.style.transition = "0.5s";
        }
    };
    window.onload = function(){
        document.getElementById("apply-now-text").style.fontSize = "25px";
        document.getElementById("apply-now-text").style.width = "280px";
        let items = document.getElementsByClassName("nav-link");
        for (let i = 0; i < items.length; i++) {
            items[i].style.fontSize = "25px";
          }
    };
}