function montoMiles(monto){
	return monto.toLocaleString('es-ES');
}
function toggleMenu() {
	var om_menu = document.querySelector(".menu ul");
	om_menu.style.display = om_menu.style.display === "block" ? "none" : "block";
}

const menuBurguer=document.getElementById("menuBurguer");
menuBurguer.addEventListener("click", toggleMenu);


/*--------------------- definir articulos ----------------*/
const animales =[
	{
		cod: 1,
		nombre: "Sagitario",
		descripcion: "Excelente reproductor que se caracteriza por su cuerpo robusto, cubierto de pelo corto, ganador de ...",
		precio: "2000000",
		foto: "imagenes/ganado/1.png"
	},
    {
		cod: 2,
		nombre: "Capricornio",
		descripcion: "Excelente reproductor que se caracteriza por su cuerpo robusto, cubierto de pelo corto, ganador de ...",
		precio: "2800000",
		foto: "imagenes/ganado/2.png"
	},
	{
		cod: 3,
		nombre: "Cancer",
		descripcion: "Excelente reproductor que se caracteriza por su cuerpo robusto, cubierto de pelo corto, ganador de ...",
		precio: "2000000",
		foto: "imagenes/ganado/3.png"
	},
	{
		cod: 4,
		nombre: "Virgo",
		descripcion: "Excelente reproductor que se caracteriza por su cuerpo robusto, cubierto de pelo corto, ganador de ...",
		precio: "3800000",
		foto: "imagenes/ganado/4.png"
	},
	{
		cod: 5,
		nombre: "Geminis",
		descripcion: "Excelente reproductor que se caracteriza por su cuerpo robusto, cubierto de pelo corto, ganador de ...",
		precio: "3200000",
		foto: "imagenes/ganado/1.jpg"
	},
	{
		cod: 6,
		nombre: "Aries",
		descripcion: "Excelente reproductor que se caracteriza por su cuerpo robusto, cubierto de pelo corto, ganador de ...",
		precio: "4000000",
		foto: "imagenes/ganado/2.jpg"
	},
	{
		cod: 7,
		nombre: "Tauro",
		descripcion: "Excelente reproductor que se caracteriza por su cuerpo robusto, cubierto de pelo corto, ganador de ...",
		precio: "2200000",
		foto: "imagenes/ganado/3.jpg"
	},
	{
		cod: 8,
		nombre: "Acuario",
		descripcion: "Excelente reproductor que se caracteriza por su cuerpo robusto, cubierto de pelo corto, ganador de ...",
		precio: "2500000",
		foto: "imagenes/ganado/4.jpg"
	},
	{
		cod: 9,
		nombre: "Leo",
		descripcion: "Excelente reproductor que se caracteriza por su cuerpo robusto, cubierto de pelo corto, ganador de ...",
		precio: "3900000",
		foto: "imagenes/ganado/5.jpg"
	},
	{
		cod: 10,
		nombre: "Libra",
		descripcion: "Excelente reproductor que se caracteriza por su cuerpo robusto, cubierto de pelo corto, ganador de ...",
		precio: "2900000",
		foto: "imagenes/ganado/6.jpg"
	},
	{
		cod: 11,
		nombre: "Escorpio",
		descripcion: "Excelente reproductor que se caracteriza por su cuerpo robusto, cubierto de pelo corto, ganador de ...",
		precio: "3100000",
		foto: "imagenes/ganado/7.jpg"
	},
	{
		cod: 12,
		nombre: "Piscis",
		descripcion: "Excelente reproductor que se caracteriza por su cuerpo robusto, cubierto de pelo corto, ganador de ...",
		precio: "2800000",
		foto: "imagenes/ganado/8.jpg"
	},
	{
		cod: 13,
		nombre: "Cumparsita",
		descripcion: "Excelente reproductor que se caracteriza por su cuerpo robusto, cubierto de pelo corto, ganador de ...",
		precio: "3100000",
		foto: "imagenes/ganado/9.jpg"
	},
	{
		cod: 14,
		nombre: "Cambalache",
		descripcion: "Excelente reproductor que se caracteriza por su cuerpo robusto, cubierto de pelo corto, ganador de ...",
		precio: "3050000",
		foto: "imagenes/ganado/10.jpg"
	},
	{
		cod: 15,
		nombre: "Sur",
		descripcion: "Madre de 3 años con ternero parido en noviembre, excelente vientre reproductor, pedigree comprobable",
		precio: "3200000",
		foto: "imagenes/ganado/11.jpg"
	},
	{
		cod: 16,
		nombre: "Por una cabeza",
		descripcion: "Excelente reproductor que se caracteriza por su cuerpo robusto, cubierto de pelo corto, ganador de ...",
		precio: "3900000",
		foto: "imagenes/ganado/15.jpg"
	}
]

let animalesHTML ="";
for (let i=0; i < animales.length; i++){
	//tmpMonto=montoMiles(animales[i].precio).toLocaleString('es-ES');
	//console.log(tmpMonto);
	animalesHTML += `
		<div class="card">
			<img class="fotoGanado" src=${animales[i].foto} alt="Imagen de ganado">
			<div class="textCard">
				<h4><b>${animales[i].nombre}</b></h4>
				<p class="masInfo">${animales[i].descripcion}Excelente reproductor que se caracteriza por su cuerpo robusto, cubierto de pelo corto, ganador de ...</p>
				<p class="precio"> $ ${parseFloat(animales[i].precio).toLocaleString('es-ES')}.-</p>
			</div>
			<footer> <button type="button" class="addCart"><i class="fa fa-shopping-cart"></i> Agregar al carrito</button> </footer>
		</div>
	`;
}

const contenedorGanado = document.getElementById("containerCard");
contenedorGanado.innerHTML = animalesHTML;

