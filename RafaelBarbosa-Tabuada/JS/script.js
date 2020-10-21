// for (i = 1; i < 11; i++) {
//     document.write("Tabuada do : " + i + "<br>");

//     for (b = 1; b < 11; b++) {
//         document.writeln(i + " x " + b + " = " + i * b);
//         document.write("<br>");
//     }
//     document.write("<hr>");
// }
function calcular() {
    let n = new Number(document.fr.txtValor.value);
    let m = new Number(document.fr.txtMultiplo.value);
    let l = new Number(document.fr.txtLimite.value);
    let tabuada = "<table align=center>";

    if (l <= 100) {
        for (i = m; i <= l; i++) {
            let p = n * i;
            tabuada = tabuada + "<tr><td>" + n + " x " + i + " = " + p + "</td></tr>";
        }
        tabuada = tabuada + "</table>";
        document.getElementById("resposta").innerHTML = tabuada;
    } else {
        document.fr.txtLimite.value = "Tente um limite menor que 100";
    }

}

function numbers() {
    let key = event.keyCode;
    if (key >= 48 && key < 58) {
        return true;
    } else {
        return false;
    }
}

