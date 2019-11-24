import { Storage } from './../src/class.js';

describe ( 'Storage', () => {
  const collectionTest = new Storage(21, 100);
// RED
test('should successfully convert user age into their age on Mercury', () => {
  collectionTest.addAge(10, 10);
    expect(collectionTest.mercuryAge).toEqual(87);
  });
// GREEN
test('should successfully convert user age into their age on Mercury', () => {
  collectionTest.addAge(21, 100);
    expect(collectionTest.mercuryAge).toEqual(87);
  });
// REFACTOR
test('should successfully convert user age into their age on Mercury', () => {
  collectionTest.addAge(21, 100);
    expect(collectionTest.mercuryAge).toEqual(87);
  });
});
