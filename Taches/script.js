const champ = document.querySelector("#champ");
const bouton = document.querySelector("#btn");
const liste = document.querySelector("#liste");
bouton.addEventListener("click", function () {
    const li = document.createElement("li");
    const suppr = document.createElement("button");
    li.textContent = champ.value;
    li.append(suppr);
    suppr.textContent = "supprimer";
    suppr.addEventListener("click", function () {
       li.remove();
    });
    if (champ.value !== "") {
        liste.append(li);
        champ.value = "";
    }
});