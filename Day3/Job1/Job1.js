function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1) && !isNaN(num2)){
        let add = num1 + num2;
        let sous = num1- num2;
        let multi = num1 * num2;
        let divi = num1/num2;

        var result = "Addition : " + add + "<br>";
        result += "Soustraction : " + sous + "<br>";
        result += "Multiplication : " + multi + "<br>";
        result += "Division : " + divi + "<br>";

        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("result").innerHTML = "Veuillez saisir des nombres valides.";
    }
}

function concatene() {
    let s1 = document.getElementById("s1").value;
    let s2 = document.getElementById("s2").value;
    if (s1.trim() !== "" && s2.trim() !== ""){
        let result = s1 + "" + s2;
        document.getElementById("concResult").innerHTML = result;
    } else {
        document.getElementById("concResult").innerHTML = "Veuillez saisir des strings valides.";
    }
}