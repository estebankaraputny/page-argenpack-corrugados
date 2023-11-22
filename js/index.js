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


// CONSUMIR FIREBASE 

// import  firebase from `./firebase.js`;

if( window.location.pathname === "/pages/product" || window.location.pathname === "/pages/product.html"){


    
    const getProductsServer = async () => {
        try {
            const response = await fetch("http://localhost:3000/products");
            const data = await response.json();
            renderCards(data);
        } catch (error) {
            console.log(`Error al obtener productos: ${error.message}`);
        }
    }


    // RENDER CARD PRODUCTS
    const contentCards = document.querySelector("#contentProducts");

    const renderCards = (data) => {
        let card = `<div class="content__messageErr" id="messageError"></div>`;

        data.forEach((product) => {
            card += `
            <div class="card-pro">
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
            </div>`;
        });

        contentCards.innerHTML = card;
    
        // BUSCADOR DE PRODUCTOS 

        const inputSearch = document.getElementById("inputSearch");
        const cardBoxs = document.querySelectorAll(".card-pro");
        // console.log("cardsBoxs", cardBoxs);

    inputSearch.addEventListener("keyup", (event) =>{
            
        let valueInput = event.target.value.toLowerCase();
        // console.log(valueInput);

        let hiddenCard = [];

        if(valueInput != " "){
            cardBoxs.forEach( box =>{
                box.textContent.toLocaleLowerCase().replace(" ", "-").includes(valueInput.replace(" ", "-"))
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


    
}

getProductsServer();


// ENVIAR IDBOX PARA RENDERIZAR 

const buttonVerMas = document.querySelectorAll("#buttonDetails");
let idOfBox = document.querySelectorAll(".idOfBox");

for(let i = 0; i < idOfBox.length; i++){
buttonVerMas[i].addEventListener( "click", () => {
    console.log(idOfBox[i].id);
    localStorage.setItem("idOfBox", idOfBox[i].id);
});
}

}


// INICIA JS DE DETALLES 

if (window.location.pathname === "/pages/details" || window.location.pathname === "/pages/details.html"){

    const getProductsServerDetails = async () => {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        renderDetails(data);
    }

    getProductsServerDetails();  


let idBoxProduct = localStorage.getItem("idOfBox");

console.log(idBoxProduct);

const renderDetails = (data) => {
    let main = "";
    
    let contentDetails = document.getElementById("detailsBox");

    for(let i = 0; i < data.length; i++){
        if(data[i].idBox == idBoxProduct){
            main += `
            <div>
                <a href="./product.html" class="button-volver"><i class="bi bi-arrow-left-circle"></i></a>
            </div>
            <div class="card-details">
                <div class="cont-img-detials" id="img-container">
                    <img class="img-details" src="${data[i].imgUrl}" alt="Imagen del producto">
                </div>
                <div class="cont-info-details">
                    <span class="ruta-details"><a href="../index.html">Inicio</a> / <a href="./product.html">Productos</a> / ${data[i].titleBox}</span>
                    <div class="cont-more-info-details">
                        <h3 class="title-details">${data[i].titleBox}</h3>
                        <p class="client-details">Cliente ${data[i].clientBox}</p>
                        <div class="cont-description-details">
                            <p class="subtitle-details">Descripción</p>
                            <p class="info-details">
                                ${data[i].descriptionBox}
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

}

if (window.location.pathname === "/pages/contact" || window.location.pathname === "/pages/contact.html"){

const buttonContact = document.querySelector("#buttonContact");

buttonContact.addEventListener("click", (event) =>{
    event.preventDefault();
})
};