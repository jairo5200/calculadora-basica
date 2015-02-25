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

function exponencial(){
	document.calcular.resultado.value=document.calcular.resultado.value*document.calcular.resultado.value
}

function raiz(){
	document.calcular.resultado.value=Math.sqrt(document.calcular.resultado.value)

}

function cosas(digito){
	if(digito=='sen'){
		document.calcular.resultado.value=Math.sin(document.calcular.resultado.value)
	}
	if(digito=='cos'){
		document.calcular.resultado.value=Math.cos(document.calcular.resultado.value)
	}
	if(digito=='tan'){
		document.calcular.resultado.value=Math.tan(document.calcular.resultado.value)
	}
	
}