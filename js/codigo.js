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