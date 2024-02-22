let encendido = true;
let velocidad= 32;
if(encendido){
    console.log('Su carro está encendido');
    if(velocidad == 0){
        console.log('El carro frenó');
    }else if(velocidad > 0 && velocidad <= 100){
        console.log('Carro en marcha...')
    }else{
        console.log('Evita un accidente...exceso de velocidad')
    }
}else{
    console.log('Encienda su vehículo..');
}







}