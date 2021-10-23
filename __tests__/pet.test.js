const Pet = require('../src/pet');
describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });
  it('has a initial age of 0', () => {
    const pet = new Pet('Fido');
    pet.growUp();

    expect(pet.age).toEqual(1);
  });
