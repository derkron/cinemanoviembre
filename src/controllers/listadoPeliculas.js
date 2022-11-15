let peliculas=[
    {
        nombre:"Hallowen la noche final",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/hallowen%20ultimo%20poster.jpg?alt=media&token=4cc9a9c8-c7bb-4462-9675-2dd057e889f0"

    },
    {
        nombre:"La noche del demonio",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/jeeppers.jpg?alt=media&token=c6c07002-c476-4095-900f-011047e967dc"
    },
    {
        nombre:"Minions",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/minions2posternuevo.jpg?alt=media&token=dc7c97ca-ebb7-4342-b0c9-a9fd7b0f1af1"
    },
    {
        nombre:"Tadeo",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/tadeo3nuevoposter.jpg?alt=media&token=3b31d4c0-3c0b-4317-ba8a-fc47a47e2a84"
    },
    {
        nombre: "Wakanda forever",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/wakanda.jpg?alt=media&token=5716b762-e877-4512-99ce-4e09cce7f690"
    },
    {
        nombre: "Los reyes del mundo",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/LOS%20REYES%20DEL%20MUNDO1.jpg?alt=media&token=bd8c16f5-b51d-48b2-921e-3199ce7e9ef4"
    },
    {
        nombre: "Quantumania",
        duracion:125,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/QUANTUMANIA1.jpg?alt=media&token=7db61d12-f9aa-4832-b138-120c8a7c6ce0"
    },
    {
        nombre: "Super Mascotas",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/SUPERMASCOTASNUEVO.jpg?alt=media&token=400f6053-e290-41b8-aa28-7f2660e1e967"
    },
    {
        nombre: "La llorona",
        duracion:75,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/LA%20LEYENDA%20DE%20LA%20LLORONA.jpg?alt=media&token=c1a5301d-affe-4b99-a976-b5019878985f"
    },
    {
        nombre: "La noche del apocalipsis",
        duracion:135,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristian-4c96b.appspot.com/o/LA%20NOCHE%20DEL%20APOCALIPSIS1.jpg?alt=media&token=a4a73f19-da64-4129-a697-4331d531dba3"
    }
]

//creamos una referencia al espacio html donde queremos 
//hacer el render (PINTAR ETIQUETAS)

let etiquetafila=document.getElementById("fila")

//SI YA TENGO DATOS QUE NORMALMENTE LLEGAN AL FRONT 
//COMO UN ARREGLO DE OBJETOS DEBEMOS RECORRER Y DEPURAR
//DICHA INFORMACION

peliculas.forEach(function(pelicula){
    //para pintar la informacion de cada pelicula debemos
    //aplicar una tecnica conocida como traversing
    //TRAVERSING== CREAR ETIQUETAS DE HTML DESDE JS 
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    let poster=document.createElement("img")
    poster.classList.add("img-fluid","w-100")
    poster.src=pelicula.poster

    let nombre=document.createElement("h3")
    nombre.classList.add("text-center","fw-bold")
    nombre.textContent=pelicula.nombre

    let duracion=document.createElement("h5")
    duracion.classList.add("text-start","fw-bold")
    duracion.textContent="Duracion:"+ pelicula.duracion+" Min"


    //padres  e hijos
    etiquetafila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(duracion)
    
    
    

})