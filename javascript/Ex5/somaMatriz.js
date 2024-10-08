
function tamanhoMatriz(){
    valor = document.getElementById('tamanho');
    sessionStorage.setItem('tm',valor.value);
}
    
function matriz(){
    let res = document.getElementById('resultado');
    var tamanho = sessionStorage.getItem('tm');
    var matriz = new Array(tamanho);
    var soma = 0;
    for(let lin=0 ; lin<tamanho ; lin++){
        matriz[lin] = new Array(lin)
    }
    for(let lin=0 ; lin<tamanho ; lin++){
        for(let col=0; col<tamanho ; col++){
            matriz[lin][col] = prompt();
            soma += Number(matriz[lin][col]);
        }
    }
    for(let lin=0 ; lin<tamanho ; lin++){
        for(let col=0; col<tamanho ; col++){
            res.innerHTML +=  matriz[lin][col] + " ";
        }
        res.innerHTML +=" <br />";
    }
    res.innerHTML += ` Soma = ${soma}`;
}
function limpar(){
    let res = document.getElementById('resultado');
    vet = [];
    res.innerHTML = 'A media do(s) valor(es) [] =';
}