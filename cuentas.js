


    



function nnn(){


    
    var valorRepuesto=document.getElementById('precioRepuesto').value;
    var valorDolar=document.getElementById('precioDolar').value;
    var repuestoPesos = valorRepuesto*valorDolar

    var select = document.getElementById('tipoRepas');
    var value = select.options[select.selectedIndex].value;
    console.log(value)
    

        var quieroGanar = 0
    

    if (value == "a"){

         quieroGanar = 24000
        
    }else if (value == "b"){

        quieroGanar = 19000

    }
    
    
    

    

    if (repuestoPesos<quieroGanar){

        var presuCliente = (repuestoPesos + quieroGanar)*1.065

    }else if(repuestoPesos>=24000 && repuestoPesos<=34000){

        presuCliente = (repuestoPesos *2)*1.065

    }else{

        presuCliente = (repuestoPesos *1.8)*1.065

    }

    


    var precioOnline = presuCliente
    var debito= presuCliente*1.10
    var tresCuotas= presuCliente*1.2495
    var seisCuotas= presuCliente*1.4489
    var nueveCuotas= presuCliente*1.6961
    var doceCuotas= presuCliente*1.9341

    
    
    
    document.getElementById('online').innerHTML = "PRECIO ONLINE  $"+precioOnline.toFixed()

    document.getElementById('debito').innerHTML = "Debito, Transferencia y credito en 1 pago $"+debito.toFixed()

    document.getElementById('valor1').innerHTML = "3 cuotas de $"+(tresCuotas/3).toFixed()+" Total $"+tresCuotas.toFixed()

    document.getElementById('valor2').innerHTML = "6 cuotas de $"+(seisCuotas/6).toFixed()+" Total $"+seisCuotas.toFixed()

    document.getElementById('valor3').innerHTML = "9 cuotas de $"+(nueveCuotas/9).toFixed()+" Total $"+nueveCuotas.toFixed()

    document.getElementById('valor4').innerHTML = "12 cuotas de $"+(doceCuotas/12).toFixed()+" Total $"+doceCuotas.toFixed()




    }

    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            nnn();
        }
    });




