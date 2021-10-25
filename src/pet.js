const MAXIMUM_FITNESS = 10;
const MINUMUM_HUNGER = 0;
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;

    this.growUp = function() {
        this.age += 1;
        this.hunger +=5;
        this.fitness -=3;
    }
    Pet.prototype.walk = function() {
        if ((this.fitness + 4) <= 10 ) {
            this.fitness += 4;
          } else {
            this.fitness = 10;
          }
      }
      Pet.prototype.checkUp = function() {
        if (this.fitness <= 3 && this.hunger >= 5) {
            return 'I am hungry AND I need a walk'
            }
          if (this.fitness <= 3) {
              return 'I need a walk';
          }
          if (this.hunger >= 5) {
              return 'I am hungry';
          }
          else return "I feel great!";
      }
};
const pet = new Pet("Fido");
const rex = new Pet("Rex");
rex.growUp = function () {
    this.age += 5;
};



module.exports = Pet;