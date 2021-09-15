const array_comidas=[];
const carrito=[];
class Comida{
    constructor(nombre,precio,disponible,grande,stock,date){
        this.nombre=nombre;
        this.precio=precio;
        this.disponible=disponible;
        this.grande=grande;
        this.stock=stock;
        this.date=date;
    }
    disponilibilidad(){
        if (this.disponible==true){
        let resultado= ` Buenisimo estamos procesando tu pedido de ${this.nombre}`
        console.log(resultado);
        } else {
        let no=`No no quedo de ${this.nombre}`;
        console.log(no);    
            }  
    }
    comprar(){
        if (this.stock>0) {
        console.log(`compraste ${this.nombre}`) 
        this.stock=this.stock -1;
        if(this.stock==3){
        console.log("quedan pocas")}                                   
          }else {
            console.log(`no quedo de ${this.nombre}`)
               }
        }
    iva(precio){
        precio=precio*1.21
    }    
}
const milanesa=new Comida('milanesa',420,true,"si",5,new Date()) ;
const milanesa_napo= new Comida("milanesa_napo",490,true,"si",5,new Date());
const risotto= new Comida('risotto',420,true,"si",2,new Date());
const zapallito= new Comida('zapallito',350,true,"si",2,new Date());

array_comidas.push(milanesa,milanesa_napo,risotto,zapallito);
let plato;
let precio;


plato=prompt("ingrese que desea")
precio=prompt("ingrese cuanto dinero desea gastar")

function verificar(plato){
let producto=array_comidas.find((producto)=>producto.nombre==plato)
let agregar;
const aumento=120;
    if (producto) {
    console.log("Tu pedido se realizo con exito")
    carrito.push(producto)
    agregar=prompt("desea agrandar el combo (si/no)").toLowerCase();
    if (agregar=="si") {
        console.log("tu pedido se agrando gracias $"+((producto.precio*1.21)+aumento))
        carrito.push(producto);
    }
    if (agregar=="no") {
        console.log("Perfecto muchas gracias");
        carrito.push(producto); 
    }
       
    }else{
    console.log("no tenemos");
    }
 }
function filtro(precio){
let filtrar=array_comidas.filter((filtrar)=>filtrar.precio<=precio)
console.log(filtrar);   
    }
verificar(plato);
filtro(precio);










