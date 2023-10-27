const productsBox = [
    {
        titleBox: "Cajita de regalo",
        descriptionBox: "",
        clientBox: "Macro",
        category: "Alta grafica",
        industria:"Financiera",
        imgUrl: "https://www.argenpack.com/files/b0adde31c4d1b033db1401c2b21c38b2.png",
        idBox: 1
    },
    {
        titleBox: "Caja contenedor de autopartes",
        descriptionBox: "",
        clientBox: "Toyota",
        category: "Grandes contenedores",
        industria:"Automotriz",
        imgUrl: "https://www.argenpack.com/files/c59387f044365b96558c45c1e4ae39e9.png",
        idBox: 2
    },
    {
        titleBox: "Caja contenedor de liquidos industriales",
        descriptionBox: "",
        clientBox: "Mirgor",
        category: "Envases especiales",
        industria:"Electrónica",
        imgUrl: "https://www.argenpack.com/files/1496e1036bf05faa1c3c313d008785ed.png",
        idBox: 3
    },
    {
        titleBox: "Caja contenedor de residuos industriales",
        descriptionBox: "",
        clientBox: "Mirgor",
        category: "Envases especiales",
        industria:"Electrónica",
        imgUrl: "https://www.argenpack.com/files/2e47487961d23b7c820d553c5018f9d4.png",
        idBox: 4
    },
    {
        titleBox: "Caja Smart Tv 50'",
        descriptionBox: "",
        clientBox: "Samsung",
        category: "Envases industriales",
        industria:"Electrónica",
        imgUrl: "https://www.argenpack.com/files/4a5ebe27772bcb14f7944ed0b5f1e1b5.png",
        idBox: 5
    },
    {
        titleBox: "Caja router Directv",
        descriptionBox: "",
        clientBox: "Directv",
        category: "Envases industriales",
        industria:"Telecomunicaciones",
        imgUrl: "https://www.argenpack.com/files/9bcb61dea1586a476b3777f57dd9191e.png",
        idBox: 6
    },
    {
        titleBox: "Cajita de regalo",
        descriptionBox: "",
        clientBox: "Disco",
        category: "Alta grafica",
        industria:"Hipermercado",
        imgUrl: "https://www.argenpack.com/files/20e1819cf7d9272e4622d44dd0512ffc.png",
        idBox: 7
    },
    {
        titleBox: "Caja Smart Tv 43'",
        descriptionBox: "",
        clientBox: "LG",
        category: "Envases industriales",
        industria:"Electrónica",
        imgUrl: "https://www.argenpack.com/files/a9d209dbcf9c3586ede0f894a38343c4.png",
        idBox: 8
    },
    {
        titleBox: "Caja autopartes",
        descriptionBox: "",
        clientBox: "Iveco",
        category: "Envases industriales",
        industria:"Automotriz",
        imgUrl: "https://www.argenpack.com/files/7c6ef7d4c1bf81fb27d4607acf0b8974.png",
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


// RENDER CARD PRODCUTS 

const contentCards = document.querySelector("#contentProducts");
    let card = `
    <div class="content__messageErr" id="messageError">
    </div>
    `;

const renderCards = () => {
    productsBox.map((product) => {
        return ( card += `
        <div class="card-pro">
          <div class="cont-img-card">
            <img src="${product.imgUrl}" alt="Imagen del producto seleccionado y personalizado por el cliente." class="img-card">
          </div>
          <div class="cont-info-card">
            <h5 class="title-card">${product.titleBox}</h5>
            <p class="price-card">Cliente: ${product.clientBox}</p>
            </div>
            <div class="cont-button-card">
              <a href="#" class="button-card">Ver más</a>
            </div>
        </div>
        `
        );
    })
    contentCards.innerHTML = card;
}

renderCards();




