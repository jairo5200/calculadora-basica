// JavaScript Document
function c(){
document.calcular.reset();
}

function calculadora(digito){
	if ((document.calcular.resultado.value == null) || (document.calcular.resultado.value == '0') || (document.calcular.resultado.value == 'NaN')){
		if ((document.calcular.resultado.value == 0)&& (digito == '.')){
			document.calcular.resultado.value = '0.'
		}
		else{
			document.calcular.resultado.value = digito
		}
	}
	else{
		document.calcular.resultado.value += digito
	}
}

function igual(){
	document.calcular.resultado.value = eval (document.calcular.resultado.value)
}