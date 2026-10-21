//Exo 1//

function carre(n) {
    return n * n;
}
console.log(carre(7));


//Exo 2//

for (let i = 1; i <= 10; i++) {
    console.log("7 x", i, "=", 7 * i);
}


//Exo 3//

function ressenti(temperature) {
    if (temperature < 15) {
        return "Il fait froid";
    } else if (temperature <= 25) {
        return "Il fait bon";
    } else {
        return "Il fait chaud";
    }
}
console.log(ressenti(14));
console.log(ressenti(15));
console.log(ressenti(25));
console.log(ressenti(26));