// Definindo variáveis
var sexo = "Masculino";
var instagram = "https://instagram.com/brunodxo";
var linkedin = "https://www.linkedin.com/in/bruno-moreira-da-silva-680109209/";
var locate = "Guarulhos-SP - Polo Higienópolis";
var nome = "Bruno Moreira da Silva";
var ra = "10723746";

// Inserindo as variáveis no HTML
document.getElementById("instagram-link").href = instagram;
document.getElementById("linkedin-link").href = linkedin;
document.getElementById("developer-info").textContent += `${nome} / RA: ${ra} - ${locate}`;