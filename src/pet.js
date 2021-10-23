function Pet(name) {
    this.name = name;
    this.age = 0;
    this.growUp = function() {
        this.age += 1;
    }
};
const pet = new Pet("Fido");
const rex = new Pet("Rex");
rex.growUp = function () {
    this.age += 5;
};



module.exports = Pet;