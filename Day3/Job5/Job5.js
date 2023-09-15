const blyat = {
    name: "Blyat",
    age: 20,
    country: "Russia",
    proffesion: "Vodka",

    presentation: function () {
        return "Hello, my name is " + this.name + " and I am " + this.age + " years old. I am from " + this.country + " and I work as a " + this.proffesion ;
    }

}

console.log(blyat.presentation());