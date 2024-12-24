/************************ funciones carrito **********************/
/*function addArti_NO(event){
    console.log("click");
    var arti={
        id: event.target.getAttribute('data-id'),
        nombre: event.target.getAttribute('data-nombre'),
        precio: event.target.getAttribute('data-precio')
    }
    var carrito =JSON.parse(localStorage.getItem("cart")) || [];
    carrito.push(arti);
    localStorage.setItem("cart", JSON.stringify(carrito));
    refreshCart();
}*/

function vaciaCart(){
	localStorage.removeItem("cart");
	refreshCart();
}

function delArti(idProd){
    var carrito =JSON.parse(localStorage.getItem("cart")) || [];
    carrito=carrito.filter(function (producto){
        return producto.id !== idProd;
    });
    localStorage.setItem("cart", JSON.stringify(carrito));
    refreshCart();
}

function refreshCart(){
    let totCompra=0;

    const carrito =JSON.parse(localStorage.getItem("cart")) || [];
    listaCarrito.innerHTML="";
    for (let i=0; i<carrito.length; i++){
        let producto = carrito[i];

        /*let img = document.createElement('img');
        img.src = producto.foto;
        img.className="fotoArtiCarrito";
        //listaCarrito.appendChild(img);


        let li = document.createElement("li");
        li.appendChild(img);
        li.className="prodCart";
        li.textContent +=  producto.nombre + " - $ " + producto.precio ;
        listaCarrito.appendChild(li);

        let newButton = document.createElement("button");
        newButton.innerHTML = "Eliminar";
        newButton.setAttribute("class", "btnDelArti");
        listaCarrito.appendChild( newButton);*/

        tmpCarrito= `<li class="prodCart">  <img class="fotoArtiCarrito" src=${producto.foto} alt="Imagen de ganado"> <p class="descArtiCart"> ${producto.nombre}</p>  <p class="montoArtiCart">$ ${parseFloat(producto.precio).toLocaleString('es-ES')}.-</p> </li> `;

        listaCarrito.innerHTML += tmpCarrito;
        totCompra+=parseFloat(producto.precio);
    }
    cantArti.innerHTML=carrito.length;
    totArti.innerHTML=parseFloat(totCompra).toLocaleString('es-ES');
    mensajeCart.innerText="";
}

/******************** onclick de agregar al carrito ******************/
const btnsAgregar=document.querySelectorAll(".addCart");
for (let i=0; i<btnsAgregar.length; i++ ){

    function addArti(event){
        let arti={
            id: i,
            foto: animales[i].foto,
            nombre: animales[i].nombre,
            precio: animales[i].precio
        }
        console.log(arti);
        let carrito =JSON.parse(localStorage.getItem("cart")) || [];
        carrito.push(arti);
        localStorage.setItem("cart", JSON.stringify(carrito));
        refreshCart();
    }

    btnsAgregar[i].addEventListener("click", addArti);
}

/******************** onclick de vaciar carrito ******************/
const btnVaciaCart=document.getElementById("vaciaCart");
btnVaciaCart.addEventListener("click", vaciaCart);

/******************** onclick de ir a pagar ******************/
const btnPagar = document.getElementById("pagarCart");
btnPagar.addEventListener("click", function() {
    if (listaCarrito.innerText!=""){
        window.location.href= "./pagos.html";
    }else{
        mensajeCart.innerText="Debe agregar productos al carrito";
    }
});

/*************** al terminar de cargar pagina que refresque carrito ********/
window.addEventListener("load", function (event) {
    refreshCart();
});

/*************** guardado en var de elementos a usar **************/
const listaCarrito = document.querySelector("#carrito ul"); 
const cantArti = document.getElementById("cantArti");
const totArti = document.getElementById("totArti");
const mensajeCart = document.getElementById("mensajeCart");
