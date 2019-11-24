import { Storage } from './../src/class.js';

describe ( 'Storage', () => {

// RED
test('should successfully make age containing what is taken from the 1st input', () => {
  let collectionTest = new Storage(0);
    expect(collectionTest.age).toEqual(100);
  });
// GREEN
test('should successfully make age containing what is taken from the 1stinput', () => {
  let collectionTest = new Storage(100);
    expect(collectionTest.age).toEqual(100);
  });
// REFACTOR
test('should successfully make age containing what is taken from the 1stinput', () => {
  let collectionTest = new Storage(100);
    expect(collectionTest.age).toEqual(100);
  });
});
