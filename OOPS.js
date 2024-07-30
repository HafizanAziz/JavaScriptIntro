class Kapal {
    constructor() {
        this.age = 31;
        this.color = 'Biru';
    }

    get location() {
        return "Canada";
    }
}

let kapal = new Kapal();
console.log(kapal.age);
console.log(kapal.location);
console.log(kapal.color);


