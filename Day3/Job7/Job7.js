const form = document.getElementById("form");
const valueSaved = document.getElementById("input");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const value = document.getElementById("input").value;
    if (value.trim() !== "") {
        localStorage.setItem("value", value);
        document.getElementById("input").value = "";
        valueSaved.textContent = "Dernière valeur sauvegardée : " + value;
    }
}
);
