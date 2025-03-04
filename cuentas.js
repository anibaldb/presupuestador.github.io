


    



function nnn(){


    
    var valorRepuesto=document.getElementById('precioRepuesto').value;
    var valorDolar=document.getElementById('precioDolar').value;
    var repuestoPesos = valorRepuesto*valorDolar

    var select = document.getElementById('tipoRepas');
    var value = select.options[select.selectedIndex].value;
    console.log(value)
    

        var quieroGanar = 0
    

    if (value == "a"){

         quieroGanar = 20500
        
    }else if (value == "b"){

        quieroGanar = 14500

    }
    
    
    

    

    if (repuestoPesos<24500){

        var presuCliente = (repuestoPesos + quieroGanar)*1.05

    }else if(repuestoPesos>=24500 && repuestoPesos<=34500){

        presuCliente = (repuestoPesos *1.8)*1.05

    }else{

        presuCliente = (repuestoPesos *1.7)*1.05

    }

    


    var precioOnline = presuCliente
    var debito= presuCliente*1.1
    var tresCuotas= presuCliente*1.162
    var seisCuotas= presuCliente*1.2201
    var nueveCuotas= presuCliente*1.5143
    var doceCuotas= presuCliente*1.6578

    
    
    
    document.getElementById('online').innerHTML = "PRECIO ONLINE  $"+precioOnline.toFixed()

    document.getElementById('debito').innerHTML = "(PRECIO MOSTRADOR) Debito y credito en 1 pago $"+debito.toFixed()

    document.getElementById('valor1').innerHTML = "(CUOTA SIMPLE) 3 cuotas de $"+(tresCuotas/3).toFixed()+" Total $"+tresCuotas.toFixed()

    document.getElementById('valor2').innerHTML = "(CUOTA SIMPLE) 6 cuotas de $"+(seisCuotas/6).toFixed()+" Total $"+seisCuotas.toFixed()

    document.getElementById('valor3').innerHTML = "9 cuotas de $"+(nueveCuotas/9).toFixed()+" Total $"+nueveCuotas.toFixed()

    document.getElementById('valor4').innerHTML = "12 cuotas de $"+(doceCuotas/12).toFixed()+" Total $"+doceCuotas.toFixed()




    }

    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            nnn();
        }
    });




