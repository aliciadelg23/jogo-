let ladoDireito = [];
let ladoEsquerdo = ["fazendeira", "carneiro", "alface", "lobo"];
let ladoBarco = "esquerda";
let noBarco = [];


function barcoirdireita(){
	let barco = document.getElementById("barco");
	barco.style.left = "400px";
	for(i = 0; i < noBarco.length; i++){ 
		if (noBarco[i] == "fazendeira"){left = "400px";}
		if (noBarco[i] == "alface"){left = "490px";}
		if (noBarco[i] == "carneiro"){eft = "410px";}
		if (noBarco[i] == "lobo"){left = "450px";}
		let objeto = document.getElementById(noBarco[i]);

		objeto.style.left = left;
	}1
	ladoBarco = "direita";

}
function barcoiresquerda(){
	let barco = document.getElementById("barco");
	barco.style.left = "200px";
	for(i = 0; i < noBarco.length; i++){ 
		if (noBarco[i] == "fazendeira"){left = "200px";}
		if (noBarco[i] == "alface"){left = "290px";}
		if (noBarco[i] == "carneiro"){eft = "210px";}
		if (noBarco[i] == "lobo"){left = "250px";}
		let objeto = document.getElementById(noBarco[i]);

		objeto.style.left = left;
	}
	ladoBarco = "esquerda";

}

function debug(peca){
	console.log("Lado Esquerdo: " + ladoEsquerdo);
	console.log("Lado Direito: " + ladoDireito);
	console.log("Dentro do Barco: " + noBarco);
	console.log("peca: " + peca)
}

function validaMovimento(){

	if (noBarco.length > 2){
		return false;
	}
	if (!noBarco.includes("fazendeira")){
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

	let check = validaMovimento()
	if(noBarco.includes(peca) && ladoBarco == "esquerda"){
		barcoEsquerda(peca);
	}
	else if(ladoEsquerdo.includes(peca) && ladoBarco == "esquerda"){
		esquerdaBarco(peca);
	}
	else if(noBarco.includes(peca) && ladoBarco == "direita"){
		barcoDireita(peca);
	}
	else if(ladoDireito.includes(peca) && ladoBarco == "direita"){
		direitaBarco(peca);
	}
	else if(check){
		if(peca == "barco" && ladoBarco == "esquerda"){
			barcoirdireita();
		}
		else if(peca == "barco" && ladoBarco == "direita"){
			barcoiresquerda();
		}
	} 
	else{
		alert("Voc?? n??o pode fazer isso")
	}
	debug(peca);
}



function esquerdaBarco(peca){
	let barco = document.getElementById("barco");
	let objeto = document.getElementById(peca);
	let top = "0px";
	let left = "0px";
	if (peca == "fazendeira"){top = "100px"; left = "200px";}
	if (peca == "alface"){top = "180px"; left = "290px";}
	if (peca == "carneiro"){top = "170px"; left = "210px";}
	if (peca == "lobo"){top = "140px"; left = "250px";}




	objeto.style.left = left;
	objeto.style.top = top;
	noBarco.push(peca);


	let a = ladoEsquerdo.indexOf(peca);
	ladoEsquerdo.splice(a, 1);

}

function barcoEsquerda(peca){
	let barco = document.getElementById("barco");
	let objeto = document.getElementById(peca);
	let top = "0px";
	let left = "0px";
	if (peca == "fazendeira"){top = "150px"; left = "10px";}
	if (peca == "alface"){top = "150px"; left = "140px";}
	if (peca == "carneiro"){top = "300px"; left = "20px";}
	if (peca == "lobo"){top = "350px"; left = "50px";}


	objeto.style.left = left;
	objeto.style.top = top;
	ladoEsquerdo.push(peca);


	let a = noBarco.indexOf(peca);
	noBarco.splice(a, 1);
}
function barcoDireita(peca){
	let barco = document.getElementById("barco");
	let objeto = document.getElementById(peca);
	let top = "0px";
	let left = "0px";
	if (peca == "fazendeira"){top = "150px"; left = "690px";}
	if (peca == "alface"){top = "150px"; left = "660px";}
	if (peca == "carneiro"){top = "300px"; left = "680px";}
	if (peca == "lobo"){top = "350px"; left = "650px";}


	objeto.style.left = left;
	objeto.style.top = top;
	ladoDireito.push(peca);


	let a = noBarco.indexOf(peca);
	noBarco.splice(a, 1);
	console.log(peca);
}
function direitaBarco(peca){
	let barco = document.getElementById("barco");
	let objeto = document.getElementById(peca);
	let top = "0px";
	let left = "0px";
	if (peca == "fazendeira"){top = "100px"; left = "400px";}
	if (peca == "alface"){top = "180px"; left = "490px";}
	if (peca == "carneiro"){top = "170px"; left = "410px";}
	if (peca == "lobo"){top = "140px"; left = "450px";}


	objeto.style.left = left;
	objeto.style.top = top;
	noBarco.push(peca);


	let a = ladoDireito.indexOf(peca);
	ladoDireito.splice(a, 1);
	console.log(peca);
}