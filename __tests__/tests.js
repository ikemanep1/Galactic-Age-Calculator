import { Storage } from './../src/class.js';

describe ( 'Storage', () => {

// RED
test('should successfully make expectancy containing what is taken from the 2nd input', () => {
  let collectionTest = new Storage(0, 0);
    expect(collectionTest.expectancy).toEqual(100, 100);
  });
// GREEN
test('should successfully make expectancy containing what is taken from the 2nd input', () => {
  let collectionTest = new Storage(100, 100);
    expect(collectionTest.expectancy).toEqual(100, 100);
  });
// REFACTOR
test('should successfully make expectancy containing what is taken from the 2nd input', () => {
  let collectionTest = new Storage(100, 100);
    expect(collectionTest.expectancy).toEqual(100, 100);
  });
});
