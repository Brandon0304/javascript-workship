let colorsemaforo = "amarillo";
colorsemaforo == "verde" ? console.log(`El semáforo está en ${colorsemaforo}, puede seguir`) : 
    colorsemaforo == "rojo" ? console.log(`El semáforo está en ${colorsemaforo}, debe parar`) :
        colorsemaforo == "amarillo" ? console.log("Aliste motores") : 
            console.log(`Muestra color ${colorsemaforo}, está dañado`);