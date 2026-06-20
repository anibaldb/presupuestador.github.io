
function precioPsicologico(precio){
    return Math.round(precio / 1000) * 1000 - 100;
}

    



function nnn(){


    
    var valorRepuesto=document.getElementById('precioRepuesto').value;
    var valorDolar=document.getElementById('precioDolar').value;
    var repuestoPesos = valorRepuesto*valorDolar*.8

    var select = document.getElementById('tipoRepas');
    var value = select.options[select.selectedIndex].value;
    console.log(value)
    

        var quieroGanar = 0
    

    if (value == "a"){

         quieroGanar = 22000
        
    }else if (value == "b"){

        quieroGanar = 22000

    }
    
    
    

    

    if (repuestoPesos<22000){

        var presuCliente = (repuestoPesos + quieroGanar)

    }else if(repuestoPesos>=22000 && repuestoPesos<=49000){

        presuCliente = (repuestoPesos *2)

    }else{

        presuCliente = (repuestoPesos*1.85)

    }

    


    var precioOnline = presuCliente
    var debito= presuCliente*1.09
    var tresCuotas= presuCliente*1.21
    var seisCuotas= presuCliente*1.32
    var nueveCuotas= presuCliente*1.45
    var doceCuotas= presuCliente*1.56

    var tresCuotasNoBanc= debito*1.2919
    var seisCuotasNoBanc= debito*1.4819

    var ganancia = presuCliente - repuestoPesos;

    precioOnline = precioPsicologico(precioOnline);
    debito = precioPsicologico(debito);

    tresCuotas = precioPsicologico(tresCuotas);
    seisCuotas = precioPsicologico(seisCuotas);
    nueveCuotas = precioPsicologico(nueveCuotas);
    doceCuotas = precioPsicologico(doceCuotas);

    tresCuotasNoBanc = precioPsicologico(tresCuotasNoBanc);
    seisCuotasNoBanc = precioPsicologico(seisCuotasNoBanc);

    
    document.getElementById('whatsapp').textContent =
`
📱 PRESUPUESTO LISTO

💰 Total reparación: $${precioOnline.toFixed()} - SOLO EFECTIVO O TRANSFERENCIA

💳 Débito / Credito(1 Pago): $${debito.toFixed()}

💳 Tarjeta:
• 3 cuotas aprox: $${(tresCuotas/3).toFixed()} (total $${tresCuotas.toFixed()})
• 6 cuotas aprox: $${(seisCuotas/6).toFixed()} (total $${seisCuotas.toFixed()})

📍  Revisión sin cargo
🛠️ Reparación en el día si lo traes antes de las 13hs de lunes a viernes

👉 Si querés la realizamos hoy mismo, avisame 👍
`;
    
    
    document.getElementById('online').innerHTML = "PRECIO ONLINE  $"+precioOnline.toFixed()

    document.getElementById('debito').innerHTML = "(PRECIO MOSTRADOR) Debito y credito en 1 pago $"+debito.toFixed()

    document.getElementById('valor1').innerHTML = "(CUOTA SIMPLE) 3 cuotas de $"+(tresCuotas/3).toFixed()+" Total $"+tresCuotas.toFixed()

    document.getElementById('valor2').innerHTML = "(CUOTA SIMPLE) 6 cuotas de $"+(seisCuotas/6).toFixed()+" Total $"+seisCuotas.toFixed()

    document.getElementById('valor3').innerHTML = "9 cuotas de $"+(nueveCuotas/9).toFixed()+" Total $"+nueveCuotas.toFixed()

    document.getElementById('valor4').innerHTML = "12 cuotas de $"+(doceCuotas/12).toFixed()+" Total $"+doceCuotas.toFixed()

    document.getElementById('nobanc1').innerHTML = "Solo tarjetas Naranja VISA Y Fava CABAL (posnet MercadoPago)"

    document.getElementById('nobanc2').innerHTML = "3 cuotas de $"+(tresCuotasNoBanc/3).toFixed()+" Total $"+tresCuotasNoBanc.toFixed()

    document.getElementById('nobanc3').innerHTML = "6 cuotas de $"+(seisCuotasNoBanc/6).toFixed()+" Total $"+seisCuotasNoBanc.toFixed()

    document.getElementById('nobanc4').innerHTML = "Todas las cuotas salen poniendo el PRECIO MOSTRADOR en cualquiera de los dos posnet y el valor de la cuota es aproximado"

    document.getElementById('ganancia').innerHTML = "GANANCIA ESTIMADA: $" + ganancia.toFixed();



    }

    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            nnn();
        }
    });




