// قائمة الموبايل

const menuBtn =
document.getElementById(
"menuBtn"
);


const navLinks =
document.getElementById(
"navLinks"
);


menuBtn.addEventListener(
"click",
function () {

    navLinks.classList.toggle(
    "active"
    );

}
);


// قفل القائمة
// بعد الضغط على لينك

const links =
document.querySelectorAll(
".nav-links a"
);


links.forEach(
function (link) {

    link.addEventListener(
    "click",
    function () {

        navLinks.classList.remove(
        "active"
        );

    }
    );

}
);


// زر الرجوع للأعلى

const topBtn =
document.getElementById(
"topBtn"
);


window.addEventListener(
"scroll",
function () {

    if (
    window.scrollY > 400
    ) {

        topBtn.style.display =
        "block";

    }

    else {

        topBtn.style.display =
        "none";

    }

}
);


topBtn.addEventListener(
"click",
function () {

    window.scrollTo({

        top:
        0,

        behavior:
        "smooth"

    });

}
);
// قائمة الموبايل

const menuBtn =
document.getElementById(
"menuBtn"
);


const navLinks =
document.getElementById(
"navLinks"
);


menuBtn.addEventListener(
"click",
function () {

    navLinks.classList.toggle(
    "active"
    );

}
);


// قفل القائمة
// بعد الضغط على لينك

const links =
document.querySelectorAll(
".nav-links a"
);


links.forEach(
function (link) {

    link.addEventListener(
    "click",
    function () {

        navLinks.classList.remove(
        "active"
        );

    }
    );

}
);


// زر الرجوع للأعلى

const topBtn =
document.getElementById(
"topBtn"
);


window.addEventListener(
"scroll",
function () {

    if (
    window.scrollY > 400
    ) {

        topBtn.style.display =
        "block";

    }

    else {

        topBtn.style.display =
        "none";

    }

}
);


topBtn.addEventListener(
"click",
function () {

    window.scrollTo({

        top:
        0,

        behavior:
        "smooth"

    });

}
);