const Pet = require("../src/pet");
describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
});
describe("age function", () => {
  it("has an initial age of 0", () => {
    const pet = new Pet("Fido");
    pet.growUp();

    expect(pet.age).toEqual(1);
  });
});
describe("hunger level", () => {
  it("has an initial hunger of 0", () => {
    const pet = new Pet("Fido");
    const rex = new Pet("Rex");
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });
});
describe("fitness level", () => {
  it("has an initial fitness level of 10", () => {
    const pet = new Pet("Fido");
    const rex = new Pet("Rex");
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
});
describe('walk', () => {
    it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');
    
        pet.fitness = 8;
        pet.walk();
    
        expect(pet.fitness).toEqual(10);
      });
    });
    describe('checkup tests', () => {
        it('if the pet fitness level is below 3 or less return a string', () => {
            const pet = new Pet('fido');
            pet.fitness = 3;
            expect(pet.checkUp(2)).toBe('I need a walk');
        });
        it('if the pets hunger is 5 or more', () => {
            const pet = new Pet('fido');
            pet.hunger = 6;
            expect(pet.checkUp(6)).toBe('I am hungry');
        });
        it('if the pets fitness is 3 or less and if the pets hunger is 5 or more returns a string', () => {
            const pet = new Pet('fido');
            pet.fitness = 3;
            pet.hunger = 6;
            expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
        });
        it('if pet fitness above 3 and hunger level is less then 5 return a string', () => {
            const pet = new Pet('fido');
            pet.fitness = 4;
            pet.hunger = 4;
            expect(pet.checkUp()).toBe('I feel great!');
        });
    })
