var galletitas = 0;

var inventario = [0,0,0];
var mejorasGalleta = [1,2,4];
var precioProducto = [100,200,400];

function clicker(){
    galletitas++;
}

function render(){
    document.getElementById("contador").innerHTML = galletitas;
    document.getElementById("inventario").innerHTML =
    `Cursores: ${inventario[0]}<br>
    Abuelas: ${inventario[1]}<br>
    Fabricas ${inventario[2]}<br>
`;
}

function produccion(){
    for(contador=0; contador<inventario.length; contador++ ){
         galletitas += inventario[contador] * mejorasGalleta[contador];
    }
};

function comprar(objeto){
    if (galletitas >= precioProducto[objeto]){
        inventario[objeto]++;
        galletitas -= precioProducto[objeto];
    }else{
        console.log("   SOS MUY POBRE!");
    }

}



var FPS = 20

setInterval(function(){
    render();
    produccion();
},1000/FPS)