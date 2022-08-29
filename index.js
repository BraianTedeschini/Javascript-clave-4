Bienvenida = alert("Bienvenidx porfavor pulsa en aceptar para comenzar")


let nota1, nota2, nota3;
        nota1 = prompt('Ingrese 1ra. nota:');
        nota2 = prompt('Ingrese 2da. nota:');
        nota3 = prompt('Ingrese 3ra. nota:');
        nota1 = parseInt(nota1);
        nota2 = parseInt(nota2);
        nota3 = parseInt(nota3);
        let pro;
        pro = (nota1 + nota2 + nota3) / 3;
        if (pro >= 9) {
            document.write('promocionado');
        } else {
            if (pro >= 7) {
                document.write('regular');
            } else {
                document.write('reprobado');
            }
        }
alert(pro)




/*
var cantidad, precio,desc,compra,pagar;
precio = parseInt(prompt("Ingresar precio"));
cantidad = parseFloat(prompt("Ingresar cantidad"));

compra = precio * cantidad;
desc = compra * 0.25;
pagar = compra - desc;

document.write("El descuento es:" +desc);



alert("El total a pagar es:" +pagar);
*/