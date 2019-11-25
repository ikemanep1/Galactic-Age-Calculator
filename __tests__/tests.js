import { Storage } from './../src/class.js';

describe ( 'Storage', () => {
  const collectionTest = new Storage(21, 100);

  test('should successfully make age containing what is taken from the 1stinput', () => {
    let collectionTest = new Storage(21);
    expect(collectionTest.age).toEqual(21);
  });

  test('should successfully make expectancy containing what is taken from the 2ndinput', () => {
    let collectionTest = new Storage(21, 100);
    expect(collectionTest.expectancy).toEqual(100);
  });

  test('should successfully convert user age into their age on Mercury', () => {
    collectionTest.addAge(21, 100);
    expect(collectionTest.mercuryAge).toEqual(87);
  });

  test('should successfully convert user age into their age on venus', () => {
    collectionTest.addAge(21, 100);
    expect(collectionTest.venusAge).toEqual(33);
  });

  test('should successfully convert user age into their age on mars', () => {
    collectionTest.addAge(21, 100);
    expect(collectionTest.marsAge).toEqual(11);
  });

  test('should successfully convert user age into their age on jupiter', () => {
    collectionTest.addAge(21, 100);
    expect(collectionTest.jupiterAge).toEqual(1);
  });

  test('should successfully convert user age expectancy into their age expectancy on mercury', () => {
    collectionTest.addExpectancy(21, 100);
    expect(collectionTest.mercuryExpectancy).toEqual(329);
  });

  test('should successfully convert user age expectancy into their age expectancy on venus', () => {
    collectionTest.addExpectancy(21, 100);
    expect(collectionTest.venusExpectancy).toEqual(128);
  });

  test('should successfully convert user age expectancy into their age expectancy on mars', () => {
    collectionTest.addExpectancy(21, 100);
    expect(collectionTest.marsExpectancy).toEqual(42);
  });

  test('should successfully convert user age expectancy into their age expectancy on jupiter', () => {
    collectionTest.addExpectancy(21, 100);
    expect(collectionTest.jupiterExpectancy).toEqual(7);
  });

  test("should successfully calculate the number of years past a given life expectancy for someone living on Mercury that has exceeded their life expectancy", () => {
    collectionTest.mercuryExpectancyBeatenCheck(500, 100);
    expect(collectionTest.mercuryRemainder).toEqual(3750);
  });

  test("should successfully calculate the number of years past a given life expectancy for someone living on Mercury that has exceeded their life expectancy", () => {
    collectionTest.venusExpectancyBeatenCheck(500, 100);
    expect(collectionTest.venusRemainder).toEqual(1451);
  });

  test("should successfully calculate the number of years past a given life expectancy for someone living on mars that has exceeded their life expectancy", () => {
    collectionTest.mercuryExpectancyBeatenCheck(500, 100);
    expect(collectionTest.marsRemainder).toEqual(477);
  });

  test("should successfully calculate the number of years past a given life expectancy for someone living on jupiter that has exceeded their life expectancy", () => {
    collectionTest.mercuryExpectancyBeatenCheck(500, 100);
    expect(collectionTest.jupiterRemainder).toEqual(76);
  });
});
