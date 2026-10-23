const bouton = document.querySelector("#btn");
const titre = document.querySelector("#titre");
const compteur = document.querySelector("#compteur");
let total = 0;
bouton.addEventListener("click", function () {
    titre.textContent = "Merci !";
    titre.style.color = "tomato";
    total = total + 1;
    compteur.textContent = total;
});


