const productsBox = [
    {
        titleBox: "Cajita de regalo",
        descriptionBox: "Medidas: Altura: 30cm, Ancho: 50cm, Área: 1500cm2 Uso: Uso para contenidos variados, el cliente lo usará para pack de regalo para sus empleados. Material: Usamos un material resistente que permite carga máxima de 3kg. Para su tamaño es un resipiente ideal y práctico, no se me ocurre más nada porque no trabajo en Argenpack.",
        clientBox: "Macro",
        category: "Alta grafica",
        industria:"Financiera",
        imgUrl: "https://www.argenpack.com/files/b0adde31c4d1b033db1401c2b21c38b2.png",
        idBox: 1
    },
    {
        titleBox: "Caja contenedor de autopartes",
        descriptionBox: "Medidas: Altura: 30cm, Ancho: 50cm, Área: 1500cm2 Uso: Uso para contenidos variados, el cliente lo usará para pack de regalo para sus empleados. Material: Usamos un material resistente que permite carga máxima de 3kg. Para su tamaño es un resipiente ideal y práctico, no se me ocurre más nada porque no trabajo en Argenpack.",
        clientBox: "Toyota",
        category: "Grandes contenedores",
        industria:"Automotriz",
        imgUrl: "https://www.argenpack.com/files/c59387f044365b96558c45c1e4ae39e9.png",
        idBox: 2
    },
    {
        titleBox: "Caja contenedor de liquidos industriales",
        descriptionBox: "Medidas: Altura: 30cm, Ancho: 50cm, Área: 1500cm2 Uso: Uso para contenidos variados, el cliente lo usará para pack de regalo para sus empleados. Material: Usamos un material resistente que permite carga máxima de 3kg. Para su tamaño es un resipiente ideal y práctico, no se me ocurre más nada porque no trabajo en Argenpack.",
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
        descriptionBox: "Medidas: Altura: 30cm, Ancho: 50cm, Área: 1500cm2 Uso: Uso para contenidos variados, el cliente lo usará para pack de regalo para sus empleados. Material: Usamos un material resistente que permite carga máxima de 3kg. Para su tamaño es un resipiente ideal y práctico, no se me ocurre más nada porque no trabajo en Argenpack.",
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
        descriptionBox: "Medidas: Altura: 30cm, Ancho: 50cm, Área: 1500cm2 Uso: Uso para contenidos variados, el cliente lo usará para pack de regalo para sus empleados. Material: Usamos un material resistente que permite carga máxima de 3kg. Para su tamaño es un resipiente ideal y práctico, no se me ocurre más nada porque no trabajo en Argenpack.",
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



// MENU HAMBURGUESA FUNCION
if(screen.width < 850){
    const buttonMenu = document.querySelector(".menu-hamburguesa");
    const listaMenu = document.querySelector(".cont-links");
    
    buttonMenu.addEventListener("click", () =>{
        listaMenu.classList.toggle("menu-active");
    });
}



if( window.location.pathname === "/pages/product"){

    

// RENDER CARD PRODCUTS 

const contentCards = document.querySelector("#contentProducts");
let card = `
<div class="content__messageErr" id="messageError">
</div>
`;

const renderCards = () => {
productsBox.map((product) => {
    return ( card += `
    <div class="card-pro" id="cardProduct">
      <div class="cont-img-card">
        <img src="${product.imgUrl}" alt="Imagen del producto seleccionado y personalizado por el cliente." class="img-card">
      </div>
      <div class="cont-info-card">
        <h5 class="title-card">${product.titleBox}</h5>
        <p class="price-card">Cliente: ${product.clientBox}</p>
        </div>
        <div class="cont-button-card">
          <a href="./details.html" class="button-card" id="buttonDetails">Ver más</a>
        </div>
        <span class="idOfBox" id="${product.idBox}"></span>
    </div>
    `
    );
})
contentCards.innerHTML = card;
}

renderCards();


// BUSCADOR DE PRODUCTOS 

const inputSearch = document.getElementById("inputSearch");
const buttonSearch = document.getElementById("buttonSearch");
const cardBoxs = document.querySelectorAll("#cardProduct");


inputSearch.addEventListener("keyup", (event) =>{

console.log(event.target.value.toLowerCase())

let hiddenCard = [];

// console.log(cardBoxs.forEach(box => {
//     console.log(box)
// }));

if(event.target.value != " "){
    cardBoxs.forEach( box =>{
        
        box.textContent.toLocaleLowerCase().replace(" ", "-").includes(event.target.value.toLocaleLowerCase().replace(" ", "-"))
        ? box.classList.remove("hidden")
        : box.classList.add("hidden")

        if(box.classList.contains("hidden")){
            hiddenCard.push(box);
        } 
    })
};

const messageError = document.getElementById("messageError");
let message = ``;

if(hiddenCard.length === cardBoxs.length){
    message += `
    <div class="card__mensajeDeError">
        <img src="../assent/image/caja-error.jpg" alt="Imagen del espacio" class="img__error">
        <div class="mensaje__error">
            <h2>No hay productos que coincidan con tu búsqueda.</h2>
            <ul>
                <li>Revisá la ortografía de la palabra.</li>
                <li>Utilizá palabras más genéricas o menos palabras.</li>
                <li>Prueba navegar por nuestro menú de categorías.</li>
                <li>Vuelve a la página principal para seguir buscando.</li>
            </ul>
        </div>
    </div> `
}

messageError.innerHTML = message;

}); 


// ENVIAR IDBOX PARA RENDERIZAR 

const buttonVerMas = document.querySelectorAll("#buttonDetails");
let idOfBox = document.querySelectorAll(".idOfBox");

for(let i = 0; i < idOfBox.length; i++){
buttonVerMas[i].addEventListener( "click", () => {
    console.log(idOfBox[i].id);
    localStorage.setItem("idOfBox", idOfBox[i].id);
});
}

} else if (window.location.pathname === "/pages/details"){
    

let idBoxProduct = localStorage.getItem("idOfBox");

console.log(idBoxProduct);

const renderDetails = () => {
    let main = "";
    
    let contentDetails = document.getElementById("detailsBox");

    for(let i = 0; i < productsBox.length; i++){
        if(productsBox[i].idBox == idBoxProduct){
            main += `
            <div>
                <a href="./product.html" class="button-volver"><i class="bi bi-arrow-left-circle"></i></a>
            </div>
            <div class="card-details">
                <div class="cont-img-detials" id="img-container">
                    <img class="img-details" src="${productsBox[i].imgUrl}" alt="Imagen del producto">
                </div>
                <div class="cont-info-details">
                    <span class="ruta-details"><a href="../index.html">Inicio</a> / <a href="./product.html">Productos</a> / ${productsBox[i].titleBox}</span>
                    <div class="cont-more-info-details">
                        <h3 class="title-details">${productsBox[i].titleBox}</h3>
                        <p class="client-details">Cliente ${productsBox[i].clientBox}</p>
                        <div class="cont-description-details">
                            <p class="subtitle-details">Descripción</p>
                            <p class="info-details">
                                ${productsBox[i].descriptionBox}
                            </p>
                            <p class="danger-details">
                                <i class="bi bi-exclamation-circle"></i>  Para obtener tu producto personalizado o saber más sobre nuestra propuestas, por favor contactanos a traves de nuestro formulario de contacto.
                            </p>
                        </div>
                        <div class="cont-button-details">
                            <a class="submit-contact button-details" href="./contact.html">Contactar</a>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        contentDetails.innerHTML = main;
    }
}
renderDetails();


// // ZOOM IMG 

// let options = {

//     fiilContainer:true,
//     // width: 300,
//     // heigth: 300,
//     zoomWidth: 200,
//     offSet: {
//         vertical: 20,
//         horizontal: 10
//     },
//     // zoomStyle: 'background-color: white;',
//     // zoomPosition (string) - position of zoomed image. It can be: top, left, bottom, original or the default right.
//     // zoomPosition:"top: 200; rigth: 500;",
//     scale: 3
// }

// new ImageZoom(document.getElementById("img-container"), options);
}
