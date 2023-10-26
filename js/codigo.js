
// function saberStock (x,stock){
//     let band=false;
//     for(let i=0;i<stock.length;i++){
//         if(stock[i].nombre===x){
//             if (stock[i].cantidad>=1){
//                 band=true;
//                 break;
//             } 
//         }
//     }
//     return band;
// }
// function buscarMayorStock(stock){
//     let mayor= stock[0].cantidad;
//     let prod = stock[0].nombre;
//     for(let i=0;i<(stock.length-1);i++){
//         if (stock[i+1].cantidad>mayor){
//             mayor=stock[i+1].mayor;
//             prod=stock[i+1].nombre;
//         }
//     }
//     return ('El producto '+prod+' es el que tiene mas reservas');    
// }
// function totalInvertido (stock){
//     let total= 0;
//     for(let i=0;i<stock.length;i++){
//         total=total+stock[i].precio*stock[i].cantidad;
//     }
//     return total;
// }
// class Productos {   
//     constructor (nombre,cantidad,precio){
//         this.nombre=nombre;
//         this.cantidad=cantidad;
//         this.precio=precio;
//     }
// }
// let nombre=prompt('Hola, hoy es '+new Date()+'. Cual es tu nombre?');
// let x= parseInt(prompt('Hola '+nombre+'! Empecemos a ingresar sus productos. Cuantos productos desea ingresar?'));
// let stock=[];
// for(let i=0;i<x;i++){
//     let a=prompt('Que tipo de producto es?');
//     let b=parseInt(prompt('Que cantidad es la que ingresa?'));
//     let c=parseInt(prompt('Cual es el precio por unidad?'));
//     let nuevoProducto = new Productos (a,b,c);
//     stock.push(nuevoProducto);
// }
// alert('Muy bien! Su stock quedo con '+stock.length+' productos');
// console.log(stock);
// do{
//     let u= parseInt(prompt('Hola '+nombre+'! Ingrese una opcion (numero):1-Agregar mas productos, 2-Sacar ultimo producto, 3-Saber si hay stock de un producto, 4-Saber que producto tiene mas reservas, 5-Saber cuanto dinero tengo en stock'));
//     switch(u) {
//         case 1:{
//             let nuevo=prompt('Que producto desea ingresar?');
//             for(let i=0;i<stock.length;i++){
//                 if(stock[i].nombre===nuevo){
//                     let a=parseInt(prompt('Que cantidad es la que ingresa?'));
//                     stock[i].cantidad= stock[i].cantidad + a;
//                     break;
//                 }
//                 else {
//                     let b=parseInt(prompt('Que cantidad es la que ingresa?'));
//                     let c=parseInt(prompt('Cual es el precio por unidad?'));
//                     let nuevoProducto = new Productos (nuevo,b,c);
//                     stock.push(nuevoProducto);
//                     break;
//                 }
//             }
//             console.log(stock)
//         }
//         case 2:{
//             stock.pop();
//             alert('Ultimo producto eliminado correctamente'); 
//             console.log(stock);
//             break;
//         }
//         case 3:{
//             let a=prompt('Ingrese el producto que desea saber si hay stock:');
//             if (saberStock(a,stock)===true) {
//                 alert('Si hay stock del producto '+a);
//                 break;
//             }else {
//                 alert ('No hay stock o no existe el producto '+a)
//                 break;
//             }
//         }
//         case 4:{
//             alert(buscarMayorStock(stock));
//             break;
//         }
//         case 5:{
//             alert ('Tiene invertido un dinero total de $'+ totalInvertido(stock));
//             break;
//         }
//         default:{
//             alert('Opcion incorrecta, ingrese una opcion valida!');
//             break;
//         }
//     }
//     condicion = prompt ('Si desea continuar ponga "si", sino ponga lo que quiera');
// }while(condicion==='si');
const miUsuario = document.getElementById ("form");
miUsuario.addEventListener ('submit',(e) =>{
    e.preventDefault ();
    const datos= {
        nombre: e.target[0].value,
        dni: e.target[1].value,
        mail: e.target[2].value
    };
    let aux=JSON.parse(localStorage.getItem('usuario'));
    if (aux?.mail !== datos.mail){
        localStorage.setItem ('usuario', JSON.stringify(datos));
        let contenedor1= document.getElementById ("contenedor1");
        contenedor1.innerHTML=` <h2>Los datos que ingresaste son:</h2>
                                <h3>Nombre: ${datos.nombre}</h3>
                                <p>DNI: ${datos.dni}</p>
                                <p>Mail: ${datos.mail}</p>`;
    } else {
        const p=document.createElement('p');
        p.textContent='Este correo ya fue ingresado!!';
        document.body.append(p);    
    }
    
})
const guardarProducto= (clave, valor) => {localStorage.setItem(clave,valor);};
const btn=document.createElement('button');
btn.textContent='Agregar Productos';
document.body.append (btn);
btn.addEventListener('click',()=>{
    const prod=document.createElement("form");
    prod.innerHTML=`<label for="name">Nombre del Producto: </label>
                    <input id="producto" type="text" placeholder="Nombre..">
                    <label for="number">Cantidad: </label>
                    <input id="cant" type="number" placeholder="Cantidad">
                    <button id="btnAgregar">AGREGAR</button>`;
    document.body.append(prod);
    const btnAgregar= document.getElementById("btnAgregar");
    btnAgregar.addEventListener('click',()=>{
        const productos=document.getElementById("producto").value;
        const cant=document.getElementById("cant").value;
        const stock={
            nombreProducto: productos,
            cantidadProducto: cant
        }
        guardarProducto(stock.nombreProducto,JSON.stringify(stock));
    })  
})
const btnMostrar=document.createElement('button');
btnMostrar.textContent='Mostrar Productos';
document.body.append (btnMostrar);
btnMostrar.addEventListener('click',()=>{
    for (let i=1;i<localStorage.length;i++){
        let clave=localStorage.key(i);
        let listaProducto=JSON.parse(localStorage.getItem(clave));
        let muestra=document.createElement('div');
        muestra.innerHTML=` <h2>Producto ${i}:</h2>
                                <h3>Nombre: ${listaProducto.nombreProducto}</h3>
                                <h3>Cantidad: ${listaProducto.cantidadProducto}</h3>`;
        document.body.append(muestra);     
    }
})
const btnEliminarUsuario=document.createElement('button');
btnEliminarUsuario.textContent='Eliminar usuario';
document.body.append (btnEliminarUsuario);
btnEliminarUsuario.addEventListener('click',()=>{
    localStorage.removeItem('usuario');
})
const btnEliminar=document.createElement('button');
btnEliminar.textContent='Eliminar todo';
document.body.append (btnEliminar);
btnEliminar.addEventListener('click',()=>{
    localStorage.clear();
})