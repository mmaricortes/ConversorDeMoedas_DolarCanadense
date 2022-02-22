//VARIAVEIS 
var valorEmRealEntrada = prompt ("Digite quantos reais (R$) você tem que vamos converter")

var valorEmDolarCanadenseNumero = parseFloat (valorEmRealEntrada)

var valorEmReal = valorEmDolarCanadenseNumero * 0.23 
var valorEmRealFixado = valorEmReal.toFixed(2)

//FUNÇÕES
alert ("O valor do dólar canadense é C$0,23, então você tem C$" + valorEmRealFixado)

alert ("Acho que você precisa trabalhar mais, hein?")
