import { Storage } from './../src/class.js';

describe ( 'Storage', () => {
  const collectionTest = new Storage(21, 100);
// RED
test('should successfully convert user age into their age on mars', () => {
  collectionTest.addAge(10, 10);
    expect(collectionTest.marsAge).toEqual(11);
  });
// GREEN
test('should successfully convert user age into their age on mars', () => {
  collectionTest.addAge(21, 100);
    expect(collectionTest.marsAge).toEqual(11);
  });
// REFACTOR
test('should successfully convert user age into their age on mars', () => {
  collectionTest.addAge(21, 100);
    expect(collectionTest.marsAge).toEqual(11);
  });
});
