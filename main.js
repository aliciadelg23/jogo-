var ladoEsquerdo = ["fazendeira", "carneiro", "alface", "lobo"];
var ladoDireito = [];
var dentroBarco = [];
var ladoBarco = "esquerda";


function barcoGoDireita(){
	var barco = document.getElementById("barco");
	barco.style.left = "400px";
	for(i = 0; i < dentroBarco.length; i++){ 
		if (dentroBarco[i] == "fazendeira"){left = "400px";}
		if (dentroBarco[i] == "alface"){left = "490px";}
		if (dentroBarco[i] == "carneiro"){eft = "410px";}
		if (dentroBarco[i] == "lobo"){left = "450px";}
		var objeto = document.getElementById(dentroBarco[i]);

		objeto.style.left = left;
	}1
	ladoBarco = "direita";

}
function barcoGoEsquerda(){
	var barco = document.getElementById("barco");
	barco.style.left = "200px";
	for(i = 0; i < dentroBarco.length; i++){ 
		if (dentroBarco[i] == "fazendeira"){left = "200px";}
		if (dentroBarco[i] == "alface"){left = "290px";}
		if (dentroBarco[i] == "carneiro"){eft = "210px";}
		if (dentroBarco[i] == "lobo"){left = "250px";}
		var objeto = document.getElementById(dentroBarco[i]);

		objeto.style.left = left;
	}
	ladoBarco = "esquerda";

}

function debug(peca){
	console.log("Lado Esquerdo: " + ladoEsquerdo);
	console.log("Lado Direito: " + ladoDireito);
	console.log("Dentro do Barco: " + dentroBarco);
	console.log("peca: " + peca)
}

function validaMovimento(){

	if (dentroBarco.length > 2){
		return false;
	}
	if (!dentroBarco.includes("fazendeira")){
		return false;
	}
	if (ladoDireito.includes("carneiro") && ladoDireito.includes("lobo")){
		return false;
	}
	if (ladoEsquerdo.includes("carneiro") && ladoEsquerdo.includes("lobo")){
		return false;
	}
	if (ladoDireito.includes("carneiro") && ladoDireito.includes("alface")){
		return false;
	}
	if (ladoEsquerdo.includes("carneiro") && ladoEsquerdo.includes("alface")){
		return false;
	}


	return true;
}


function clicouObjeto(peca){

	var check = validaMovimento()
	if(dentroBarco.includes(peca) && ladoBarco == "esquerda"){
		barcoEsquerda(peca);
	}
	else if(ladoEsquerdo.includes(peca) && ladoBarco == "esquerda"){
		esquerdaBarco(peca);
	}
	else if(dentroBarco.includes(peca) && ladoBarco == "direita"){
		barcoDireita(peca);
	}
	else if(ladoDireito.includes(peca) && ladoBarco == "direita"){
		direitaBarco(peca);
	}
	else if(check){
		if(peca == "barco" && ladoBarco == "esquerda"){
			barcoGoDireita();
		}
		else if(peca == "barco" && ladoBarco == "direita"){
			barcoGoEsquerda();
		}
	} 
	else{
		alert("Cuidado que alguma coisa pode dar errado")
	}
	debug(peca);
}



function esquerdaBarco(peca){
	var barco = document.getElementById("barco");
	var objeto = document.getElementById(peca);
	var top = "0px";
	var left = "0px";
	if (peca == "fazendeira"){top = "100px"; left = "200px";}
	if (peca == "alface"){top = "180px"; left = "290px";}
	if (peca == "carneiro"){top = "170px"; left = "210px";}
	if (peca == "lobo"){top = "140px"; left = "250px";}




	objeto.style.left = left;
	objeto.style.top = top;
	dentroBarco.push(peca);


	var a = ladoEsquerdo.indexOf(peca);
	ladoEsquerdo.splice(a, 1);

}

function barcoEsquerda(peca){
	var barco = document.getElementById("barco");
	var objeto = document.getElementById(peca);
	var top = "0px";
	var left = "0px";
	if (peca == "fazendeira"){top = "150px"; left = "10px";}
	if (peca == "alface"){top = "150px"; left = "140px";}
	if (peca == "carneiro"){top = "300px"; left = "20px";}
	if (peca == "lobo"){top = "350px"; left = "50px";}


	objeto.style.left = left;
	objeto.style.top = top;
	ladoEsquerdo.push(peca);


	var a = dentroBarco.indexOf(peca);
	dentroBarco.splice(a, 1);
}
function barcoDireita(peca){
	var barco = document.getElementById("barco");
	var objeto = document.getElementById(peca);
	var top = "0px";
	var left = "0px";
	if (peca == "fazendeira"){top = "150px"; left = "690px";}
	if (peca == "alface"){top = "150px"; left = "660px";}
	if (peca == "carneiro"){top = "300px"; left = "680px";}
	if (peca == "lobo"){top = "350px"; left = "650px";}


	objeto.style.left = left;
	objeto.style.top = top;
	ladoDireito.push(peca);


	var a = dentroBarco.indexOf(peca);
	dentroBarco.splice(a, 1);
	console.log(peca);
}
function direitaBarco(peca){
	var barco = document.getElementById("barco");
	var objeto = document.getElementById(peca);
	var top = "0px";
	var left = "0px";
	if (peca == "fazendeira"){top = "100px"; left = "400px";}
	if (peca == "alface"){top = "180px"; left = "490px";}
	if (peca == "carneiro"){top = "170px"; left = "410px";}
	if (peca == "lobo"){top = "140px"; left = "450px";}


	objeto.style.left = left;
	objeto.style.top = top;
	dentroBarco.push(peca);


	var a = ladoDireito.indexOf(peca);
	ladoDireito.splice(a, 1);
	console.log(peca);
}