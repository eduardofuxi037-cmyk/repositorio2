function adicionar00() {
    document.getElementById('entrada').value += "00";
}

function adicionarpar1() {
    document.getElementById('entrada').value += "(";
}

function adicionarpar2() {
    document.getElementById('entrada').value += ")";
}

function adicionarfat() {
 const entrada = document.getElementById('entrada');

 let n = parseInt(entrada.value);

 if(isNaN(n) || n < 0){
    entrada.value = "erro";
    return;
 }

 let result = 1;

 for(let i = 2; i<=n; i++){
    result *= i;
 }
 entrada.value = result;
}


//-----------------------------------------------------------
//-----------------------------------------------------------

function adicionar7() {
    document.getElementById('entrada').value += "7";
}

function adicionar8() {
    document.getElementById('entrada').value += "8";
}

function adicionar9() {
    document.getElementById('entrada').value += "9";
}

function adicionarsoma() {
    document.getElementById('entrada').value += "+";
}

//-----------------------------------------------------------
//-----------------------------------------------------------

function adicionar6() {
    document.getElementById('entrada').value += "6";
}

function adicionar5() {
    document.getElementById('entrada').value += "5";
}

function adicionar4() {
    document.getElementById('entrada').value += "4";
}

function adicionarsub() {
    document.getElementById('entrada').value += "-";
}

//------------------------------------------------------------
//------------------------------------------------------------

function adicionar1() {
    document.getElementById('entrada').value += "1";
}

function adicionar2() {
    document.getElementById('entrada').value += "2";
}

function adicionar3() {
    document.getElementById('entrada').value += "3";
}

function adicionarmult() {
    document.getElementById('entrada').value += "*";
}

//------------------------------------------------------------
//------------------------------------------------------------

function adicionarC() {
    document.getElementById('entrada').value = "";
}

function adicionar0() {
    document.getElementById('entrada').value += "0";
}

function adicionarV() {

    if (!entrada.value) {
        entrada.value = "erro!! input vazia";

        return;

    } else {
        document.getElementById('entrada').value = Math.sqrt(Number(entrada.value));
    }
}


function adicionardiv() {
    document.getElementById('entrada').value += "/";
}

//------------------------------------------------------------
//------------------------------------------------------------

function adicionardel() {
    const entrada = document.getElementById('entrada');
    entrada.value =
        entrada.value.slice(0, - 1);
}

function adicionarvirg() {
    document.getElementById('entrada').value += ".";
}

let pnum = null;
let operador = null;

function adicionarperc() {
    pnum = Number(document.getElementById('entrada').value);
    operador = "%";

    document.getElementById('entrada').value = "";
}

function adicionarigual() {

    if (!entrada.value) {
        entrada.value = "erro!! input vazia";

        return;

    }
//calculo da percentagem
    if (operador === "%") {
        const segundonumero = Number(entrada.value);

        let result = (pnum / 100) * segundonumero;

        entrada.value = result;

        pnum = null;
        operador = null;

        return;
    }
//calculo dos operadores normais(+,-,*,/)
    try {
        entrada.value = eval(entrada.value);
    }
    catch {
        entrada.value = "erro";
    }
}

