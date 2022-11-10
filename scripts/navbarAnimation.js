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

            dyn_navbar.style.height = '10%';
            dyn_navbar.style.transition = "0.5s";
            dyn_navbar.style.opacity = "0.9";
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

            dyn_navbar.style.height = '70%';
            dyn_navbar.style.transition = "0.5s";
            dyn_navbar.style.opacity = "1.0";
            logo_link.style.marginLeft = "3rem";
            logo_link.style.marginRight = "3rem";
            logo_link.style.paddingLeft = "3rem";
            logo_link.style.paddingRight = "3rem";
            logo_link.style.transition = "0.5s";
            company_logo.style.width = "300px";
            company_logo.style.height = "72px";
            company_logo.style.margin = "2rem 0rem 2rem 0rem";
            company_logo.style.transition = "0.5s";
        }
    };
}