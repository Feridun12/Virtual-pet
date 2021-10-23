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
