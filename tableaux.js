//Exo 1//

const notes = [12, 15, 8, 10, 17];
let somme = 0;
for (const note of notes) {
    somme = somme + note;
}


console.log(notes[0]);
console.log(notes[notes.length - 1]);
console.log(notes.length);
console.log(somme);
console.log(somme / notes.length);

//Exo 2//

const livre = {
  titre: "Aled",
  auteur: "Elek",
  pages: 456,
};

livre.annee = 2005; 
livre.pages = 500; 

console.log(livre.titre, "de", livre.auteur, ":", livre.pages, "pages");
console.log(livre);