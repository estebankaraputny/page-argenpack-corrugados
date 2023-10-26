const productsBox = [
    {
        titleBox: "Caja de cartón",
        descriptionBox: "",
        clientBox: "Macro",
        category: "Alta grafica",
        industria:"Financiera",
        imgUrl: "",
        idBox: 1
    },
    {
        titleBox: "Caja de cartón",
        descriptionBox: "",
        clientBox: "Toyota",
        category: "Grandes contenedores",
        industria:"Automotriz",
        imgUrl: "",
        idBox: 2
    },
    {
        titleBox: "Caja de cartón",
        descriptionBox: "",
        clientBox: "Mirgor",
        category: "Envases especiales",
        industria:"Electrónica",
        imgUrl: "",
        idBox: 3
    },
    {
        titleBox: "Caja de cartón",
        descriptionBox: "",
        clientBox: "Mirgor",
        category: "Envases especiales",
        industria:"Electrónica",
        imgUrl: "",
        idBox: 4
    },
    {
        titleBox: "Caja de cartón",
        descriptionBox: "",
        clientBox: "Samsung",
        category: "Envases industriales",
        industria:"Electrónica",
        imgUrl: "",
        idBox: 5
    },
    {
        titleBox: "Caja de cartón",
        descriptionBox: "",
        clientBox: "Directv",
        category: "Envases industriales",
        industria:"Telecomunicaciones",
        imgUrl: "",
        idBox: 6
    },
    {
        titleBox: "Caja de cartón",
        descriptionBox: "",
        clientBox: "Disco",
        category: "Alta grafica",
        industria:"Hipermercado",
        imgUrl: "",
        idBox: 7
    },
    {
        titleBox: "Caja de cartón",
        descriptionBox: "",
        clientBox: "LG",
        category: "Envases industriales",
        industria:"Electrónica",
        imgUrl: "",
        idBox: 8
    },
    {
        titleBox: "Caja de cartón",
        descriptionBox: "",
        clientBox: "Iveco",
        category: "Envases industriales",
        industria:"Automotriz",
        imgUrl: "",
        idBox: 9
    },
]


// EMPEZEMOS CON EL CÓDIGO 

// SPINER DE CARGA 

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

// ** FADE IN FUNCTION **
function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

const loaderPage = document.querySelector("#loader");
const bodyPage = document.querySelector("#hiddenBody");

window.onload = function(){
    fadeOut(loaderPage);
    bodyPage.classList.remove("hiddenBody");
};
