import { Storage } from './../src/class.js';

describe ( 'Storage', () => {
  const collectionTest = new Storage(21, 100);
// RED
test('should successfully convert user age into their age on venus', () => {
  collectionTest.addAge(10, 10);
    expect(collectionTest.venusAge).toEqual(33);
  });
// GREEN
test('should successfully convert user age into their age on venus', () => {
  collectionTest.addAge(21, 100);
    expect(collectionTest.venusAge).toEqual(33);
  });
// REFACTOR
test('should successfully convert user age into their age on venus', () => {
  collectionTest.addAge(21, 100);
    expect(collectionTest.venusAge).toEqual(33);
  });
});
