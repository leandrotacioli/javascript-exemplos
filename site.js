const mainPanelId = "panel";

const DEVELOPER = {
	name: 'Leandro Tacioli',
	github: 'https://github.com/leandrotacioli'
};

function loadJavaScript() {
	document.getElementById(mainPanelId).style["background-color"] = "#a5a5a5";
	document.getElementById(mainPanelId).innerHTML = "<h1>Hello World!!!</h1>";
	
	loadHTMLElements();
	loadMathematicalOperations();
	loadLoops();
	loadArrays();
	
	document.getElementById(mainPanelId).innerHTML += "<b>" + DEVELOPER.name + "</b>" + " - " + DEVELOPER.github;
}

function loadHTMLElements() {
	var divId = "div-html";

	addDiv(divId, "Criação de Elementos HTML", mainPanelId, "#f28181");
	
	// Cria uma label via JavaScript
	var newLabel = document.createElement("label");
	newLabel.innerHTML = "Label criada via JavaScript";
	
	document.getElementById(divId).appendChild(newLabel);
	
	addDoubleBreak(divId);
	
	// Cria uma caixa de texto via JavaScript
	var newInputText = document.createElement("input");
	newInputText.setAttribute("type", "text");
	newInputText.setAttribute("name", "text-box-example");
	newInputText.setAttribute("value", "Caixa de texto criada via JavaScript");
	newInputText.setAttribute("style", "width: 225px;");

	document.getElementById(divId).appendChild(newInputText);
	
	addThematicBreak(mainPanelId);
}

function loadMathematicalOperations() {
	var divId = "div-math";

	addDiv(divId, "Operações Matemáticas", mainPanelId, "#ebb24d");
	
	var value1 = 21.5;
	var value2 = 4;
	
	document.getElementById(divId).innerHTML += "<b>Valor 1</b>: " + value1 + "&nbsp;&nbsp; | &nbsp;&nbsp;" + "<b>Valor 2</b>: " + value2;
	
	addDoubleBreak(divId);
	
	// Adição
	var addition = value1 + value2;
	document.getElementById(divId).innerHTML += "<b>Adição</b>: " + addition;
	
	addBreak(divId);
	
	// Substração
	var subtraction = value1 - value2;
	document.getElementById(divId).innerHTML += "<b>Substração</b>: " + subtraction;
	
	addBreak(divId);
	
	// Multiplicação
	var multiplication = value1 * value2;
	document.getElementById(divId).innerHTML += "<b>Multiplicação</b>: " + multiplication;
	
	addBreak(divId);
	
	// Divisão
	var division = value1 / value2;
	document.getElementById(divId).innerHTML += "<b>Divisão</b>: " + division;
	
	addBreak(divId);
	
	// Módulo
	var remainder = value1 % value2;
	document.getElementById(divId).innerHTML += "<b>Módulo (Resto da Divisão)</b>: " + remainder;
	
	addBreak(divId);
	
	// Raíz Quadrada
	var squareRoot = Math.sqrt(value2);
	document.getElementById(divId).innerHTML += "<b>Raíz Quadrada de " + value2 + "</b>: " + squareRoot;
	
	addBreak(divId);
	
	// Exponenciação
	var exponentiation = Math.pow(value2, 2);
	document.getElementById(divId).innerHTML += "<b>" + value2 + " elevado a 2</b>: " + exponentiation;
	addBreak(divId);
	var exponentiation = Math.pow(value2, 5);
	document.getElementById(divId).innerHTML += "<b>" + value2 + " elevado a 5</b>: " + exponentiation;
	
	
	addThematicBreak(mainPanelId);
}

function loadLoops() {
	var divId = "div-loops";

	addDiv(divId, "Loops", mainPanelId, "#81f2a1");
	
	for (let i = 2015; i <= 2020; i++) {
		document.getElementById(divId).innerHTML += "Ano: " + i;
		addBreak(divId);
	}
	
	addThematicBreak(mainPanelId);
}

function loadArrays() {
	var divId = "div-arrays";
	
	addDiv(divId, "Manipulação de Arrays", mainPanelId, "#81c1f2");
	
	var colors = ["Roxo", "Vermelho", "Branco", "Azul", "Verde", "Amarelo", "Preto", "Violeta", "Laranja", "Cinza"];
	
	document.getElementById(divId).innerHTML += "Array original: " + colors.toString();
	addBreak(divId);
	document.getElementById(divId).innerHTML += "Posição 0: " + colors[0];
	addBreak(divId);
	document.getElementById(divId).innerHTML += "Posição 3: " + colors[3];
	
	addDoubleBreak(divId);
	
	// Inverte os elementos do array
	colors.reverse();
	document.getElementById(divId).innerHTML += "Array invertido (<i>reverse</i>): " + colors.toString();
	addBreak(divId);
	document.getElementById(divId).innerHTML += "Posição 0: " + colors[0];
	addBreak(divId);
	document.getElementById(divId).innerHTML += "Posição 3: " + colors[3];
	
	addDoubleBreak(divId);
	
	// Ordena os elementos do array
	colors.sort();
	document.getElementById(divId).innerHTML += "Array ordenado (<i>sort</i>): " + colors.toString();
	addBreak(divId);
	document.getElementById(divId).innerHTML += "Posição 0: " + colors[0];
	addBreak(divId);
	document.getElementById(divId).innerHTML += "Posição 3: " + colors[3];
	
	addDoubleBreak(divId);
	
	// Adiciona elemento no array na posição 5
	colors.splice(5, 0, "Marrom");
	document.getElementById(divId).innerHTML += "Array com novo elemento na posição 5 (<i>splice(5, 0, 'Marrom')</i>): " + colors.toString();
	
	addDoubleBreak(divId);
	
	// Adicionando elemento no array
	colors.push("Rosa");
	document.getElementById(divId).innerHTML += "Array com novo elemento no final (<i>push</i>): " + colors.toString();
	
	addDoubleBreak(divId);
	
	// Removendo primeiro elemento do array
	colors.shift();
	document.getElementById(divId).innerHTML += "Array com primeiro elemento removido (<i>shift</i>): " + colors.toString();
	
	addDoubleBreak(divId);
	
	// Removendo último elemento do array
	colors.pop();
	document.getElementById(divId).innerHTML += "Array com último elemento removido (<i>pop</i>): " + colors.toString();
	
	addDoubleBreak(divId);
	
	// Removendo três elementos do array iniciando-se da posição 1
	colors.splice(1,3);
	document.getElementById(divId).innerHTML += "Array com três elementos removidos a partir da posição 1 (<i>splice(1,3)</i>): " + colors.toString();
	
	addDoubleBreak(divId);
	
	// Remove elemento do array pelo seu valor
	colors = colors.filter(function(e) { return e !== "Verde" })
	document.getElementById(divId).innerHTML += "Array com elemento removido por valor (<i>filter</i>): " + colors.toString();
	
	addDoubleBreak(divId);
	
	addThematicBreak(mainPanelId);
}

function addDiv(divId, divDescription, divFather, divColor) {
	var newDiv = document.createElement("div");
	newDiv.setAttribute("id", divId);
	newDiv.setAttribute("style", "margin: 25px; padding: 10px; background-color: " + divColor + "; border: solid");
	
	document.getElementById(divFather).appendChild(newDiv);
	document.getElementById(divId).innerHTML = "<span style='font-size: 25px; font-weight: bold'>" + divDescription + "</span>";
	
	addDoubleBreak(divId);
}

function addBreak(divId) {
	document.getElementById(divId).innerHTML += "<br>";
}

function addDoubleBreak(divId) {
	addBreak(divId);
	addBreak(divId);
}

function addThematicBreak(divId) {
	document.getElementById(divId).innerHTML += "<hr>";
}