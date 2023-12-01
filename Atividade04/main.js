let num1 =parseFloat(prompt("Digite um numero"));
let num2 = parseFloat(prompt ("Digite outro numero"));
let operacao = prompt ("Qual operação deseja?");

operacao = operacao.toUpperCase()

if (operacao=="SOMA"){

    alert (num1+num2);

}else if (operacao =="SUBTRAÇÃO"){

    alert (num1-num2);

}else if (operacao== "MULTIPLICACAO"){

    alert (num1*num2);

}else if (operacao== "DIVISÃO"){

    alert (num1/num2)

}else if (operacao== "POTENCIA"){

    alert (num1**num2)

}else{
    alert ("operacao invalida")

}
