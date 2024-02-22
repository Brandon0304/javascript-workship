let tipocliente = "normal";
if(tipocliente == "normal"){
    console.log(`Va a ser atendido en el módulo 1, por ser cliente ${tipocliente}`);
}else if(tipocliente == "preferencial"){
    console.log("Está habilitado en los módulos 2 y 3 para su atención")
}else{
    console.log("Usted no es cliente del banco, por favor diríjase al módulo 4");
}