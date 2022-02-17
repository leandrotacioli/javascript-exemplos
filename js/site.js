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
	loadCookies();
	
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
	
	document.getElementById(divId).innerHTML += createHTMLParagraph("<b>Valor 1</b>: " + value1 + "&nbsp;&nbsp; | &nbsp;&nbsp;" + "<b>Valor 2</b>: " + value2); 
	
	addBreak(divId);
	
	// Adição
	var addition = value1 + value2;
	document.getElementById(divId).innerHTML += createHTMLParagraph("<b>Adição</b>: " + addition);
	
	// Substração
	var subtraction = value1 - value2;
	document.getElementById(divId).innerHTML += createHTMLParagraph("<b>Substração</b>: " + subtraction);
	
	// Multiplicação
	var multiplication = value1 * value2;
	document.getElementById(divId).innerHTML += createHTMLParagraph("<b>Multiplicação</b>: " + multiplication);
	
	// Divisão
	var division = value1 / value2;
	document.getElementById(divId).innerHTML += createHTMLParagraph("<b>Divisão</b>: " + division);
	
	// Módulo
	var remainder = value1 % value2;
	document.getElementById(divId).innerHTML += createHTMLParagraph("<b>Módulo (Resto da Divisão)</b>: " + remainder);
	
	// Raíz Quadrada
	var squareRoot = Math.sqrt(value2);
	document.getElementById(divId).innerHTML += createHTMLParagraph("<b>Raíz Quadrada de " + value2 + "</b>: " + squareRoot);
	
	// Exponenciação
	var exponentiation = Math.pow(value2, 2);
	document.getElementById(divId).innerHTML += createHTMLParagraph("<b>Exponenciação - " + value2 + " elevado a 2</b>: " + exponentiation);
	var exponentiation = Math.pow(value2, 5);
	document.getElementById(divId).innerHTML += createHTMLParagraph("<b>Exponenciação - " + value2 + " elevado a 5</b>: " + exponentiation);
	
	addThematicBreak(mainPanelId);
}

function loadLoops() {
	var divId = "div-loops";

	addDiv(divId, "Loops", mainPanelId, "#81f2a1");
	
	for (let i = 2015; i <= 2020; i++) {
		document.getElementById(divId).innerHTML += createHTMLParagraph("Ano: " + i);
	}
	
	addThematicBreak(mainPanelId);
}

function loadArrays() {
	var divId = "div-arrays";
	
	addDiv(divId, "Manipulação de Arrays", mainPanelId, "#81c1f2");
	
	var colors = ["Roxo", "Vermelho", "Branco", "Azul", "Verde", "Amarelo", "Preto", "Violeta", "Laranja", "Cinza"];
	
	document.getElementById(divId).innerHTML += createHTMLParagraph("Array original: " + colors.toString());
	document.getElementById(divId).innerHTML += createHTMLParagraph("Posição 0: " + colors[0]);
	document.getElementById(divId).innerHTML += createHTMLParagraph("Posição 3: " + colors[3]);
	
	addBreak(divId);
	
	// Inverte os elementos do array
	colors.reverse();
	document.getElementById(divId).innerHTML += createHTMLParagraph("Array invertido (<i>reverse</i>): " + colors.toString());
	document.getElementById(divId).innerHTML += createHTMLParagraph("Posição 0: " + colors[0]);
	document.getElementById(divId).innerHTML += createHTMLParagraph("Posição 3: " + colors[3]);
	
	addBreak(divId);
	
	// Ordena os elementos do array
	colors.sort();
	document.getElementById(divId).innerHTML += createHTMLParagraph("Array ordenado (<i>sort</i>): " + colors.toString());
	document.getElementById(divId).innerHTML += createHTMLParagraph("Posição 0: " + colors[0]);
	document.getElementById(divId).innerHTML += createHTMLParagraph("Posição 3: " + colors[3]);
	
	addBreak(divId);
	
	// Adiciona elemento no array na posição 5
	colors.splice(5, 0, "Marrom");
	document.getElementById(divId).innerHTML += createHTMLParagraph("Array com novo elemento na posição 5 (<i>splice(5, 0, 'Marrom')</i>): " + colors.toString());
	
	addBreak(divId);
	
	// Adicionando elemento no array
	colors.push("Rosa");
	document.getElementById(divId).innerHTML += createHTMLParagraph("Array com novo elemento no final (<i>push</i>): " + colors.toString());
	
	addBreak(divId);
	
	// Removendo primeiro elemento do array
	colors.shift();
	document.getElementById(divId).innerHTML += createHTMLParagraph("Array com primeiro elemento removido (<i>shift</i>): " + colors.toString());
	
	addBreak(divId);
	
	// Removendo último elemento do array
	colors.pop();
	document.getElementById(divId).innerHTML += createHTMLParagraph("Array com último elemento removido (<i>pop</i>): " + colors.toString());
	
	addBreak(divId);
	
	// Removendo três elementos do array iniciando-se da posição 1
	colors.splice(1,3);
	document.getElementById(divId).innerHTML += createHTMLParagraph("Array com três elementos removidos a partir da posição 1 (<i>splice(1,3)</i>): " + colors.toString());
	
	addBreak(divId);
	
	// Remove elemento do array pelo seu valor
	colors = colors.filter(function(e) { return e !== "Verde" })
	document.getElementById(divId).innerHTML += createHTMLParagraph("Array com elemento removido por valor (<i>filter</i>): " + colors.toString());
	
	addBreak(divId);
	
	addThematicBreak(mainPanelId);
}

function loadCookies() {
	var divId = "div-cookies";
	
	addDiv(divId, "Manipulação de Cookies", mainPanelId, "#f6f7c2");

	var contentHTML = "<button type='button' onclick='createCookie(\"Username\", \"leandrotacioli\", 30); displayCookies();'>Criar Cookie 'Username'</button>" +
	                  "&nbsp;&nbsp;" +
	                  "<button type='button' onclick='destroyCookie(\"Username\"); displayCookies();'>Excluir Cookie 'Username'</button>" +
	                  "<br><br>" +
	                  "Chave: <input type='text' id='tb-cookie-key' name='tb-cookie-key' style='width: 125px;'>" +
	                  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
	                  "Valor: <input type='text' id='tb-cookie-value' name='tb-cookie-value' style='width: 125px;'>" +
	                  "&nbsp;&nbsp;&nbsp;" +
	                  "<button type='button' onclick='createCookieByKeyValue()'>Criar Cookie 'Chave' + 'Valor'</button>" +
	                  "&nbsp;&nbsp;" +
	                  "<button type='button' onclick='deleteCookieByKey();'>Excluir Cookie 'Chave'</button>" +
	                  "<div id='div-cookies-obs' style='margin-top: 15px; padding: 15px; border: solid 2px red;'></div>";
	
	document.getElementById(divId).innerHTML += contentHTML;

	displayCookies();

	addThematicBreak(mainPanelId);
}

function displayCookies() {
	var cookies = readCookies();  // Chamando a função no arquivo 'js/cookie.js'
	
	document.getElementById("div-cookies-obs").innerHTML = (cookies != null && cookies != "") ? cookies : "Nenhum cookie existente";
}

function createCookieByKeyValue() {
	var cookieKey = document.getElementById("tb-cookie-key");
	var cookieValue = document.getElementById("tb-cookie-value");

	if ((cookieKey.value != null && cookieKey.value != "") && (cookieValue.value != null && cookieValue.value != "")) {
		createCookie(cookieKey.value, cookieValue.value, 30);  // Chamando a função no arquivo 'js/cookie.js'
		displayCookies("div-cookies-obs");
		cookieKey.value = "";
		cookieValue.value = "";
	} else {
		alert("Por favor, informe a 'Chave' e o 'Valor' para criação do Cookie");
	}
}

function deleteCookieByKey() {
	var cookieKey = document.getElementById("tb-cookie-key");
	
	if (cookieKey.value != null && cookieKey.value != "") {
		destroyCookie(cookieKey.value);  // Chamando a função no arquivo 'js/cookie.js'
		displayCookies("div-cookies-obs");
		cookieKey.value = "";
	} else {
		alert("Por favor, informe a 'Chave' para exclusão do Cookie");
	}
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

function createHTMLParagraph(content) {
	return "<p style='margin: 0px !important;'>" + content + "</p>";
}