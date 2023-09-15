function sum(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a + b;
    } else {
        return "Veuillez saisir des nombres valides.";
    }
}

function getLength(s1){
    if (s1.trim() !== "") {
        return s1.length;
    } else {
        return "Veuillez saisir des strings valides.";
    }
}

console.log(sum(1, 2));
console.log(getLength("aaavaafazed"));