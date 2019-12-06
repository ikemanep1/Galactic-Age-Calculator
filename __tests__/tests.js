import { Storage } from './../src/class.js';

describe ( 'Storage', () => {
  const youngTest = new Storage(21, 100);
  const oldTest = new Storage(500, 100);

  test('should successfully make age containing what is taken from the 1stinput', () => {
    youngTest.addAge();
    expect(youngTest.age).toEqual(21);
  });

  test('should successfully make expectancy containing what is taken from the 2ndinput', () => {
    youngTest.addExpectancy();
    expect(youngTest.expectancy).toEqual(100);
  });

  test('should successfully convert user age into their age on Mercury', () => {
    youngTest.addAge();
    expect(youngTest.mercuryAge).toEqual(87);
  });

  test('should successfully convert user age into their age on venus', () => {
    youngTest.addAge();
    expect(youngTest.venusAge).toEqual(33);
  });

  test('should successfully convert user age into their age on mars', () => {
    youngTest.addAge();
    expect(youngTest.marsAge).toEqual(11);
  });

  test('should successfully convert user age into their age on jupiter', () => {
    youngTest.addAge();
    expect(youngTest.jupiterAge).toEqual(1);
  });

  test('should successfully convert user age expectancy into their age expectancy on mercury', () => {
    youngTest.addExpectancy();
    expect(youngTest.mercuryExpectancy).toEqual(329);
  });

  test('should successfully convert user age expectancy into their age expectancy on venus', () => {
    youngTest.addExpectancy();
    expect(youngTest.venusExpectancy).toEqual(128);
  });

  test('should successfully convert user age expectancy into their age expectancy on mars', () => {
    youngTest.addExpectancy();
    expect(youngTest.marsExpectancy).toEqual(42);
  });

  test('should successfully convert user age expectancy into their age expectancy on jupiter', () => {
    youngTest.addExpectancy();
    expect(youngTest.jupiterExpectancy).toEqual(7);
  });

  test("should successfully calculate the number of years past a given life expectancy for someone living on Mercury that has exceeded their life expectancy", () => {
    oldTest.addAge();
    oldTest.addExpectancy();
    oldTest.mercuryExpectancyBeatenCheck();
    expect(oldTest.mercuryBeaten).toEqual("You have outlived your life expectancy by 3750 years on Mercury!");
  });

  test("should successfully calculate the number of years past a given life expectancy for someone living on Mercury that has exceeded their life expectancy", () => {
    oldTest.addAge();
    oldTest.addExpectancy();
    oldTest.venusExpectancyBeatenCheck();
    expect(oldTest.venusBeaten).toEqual("You have outlived your life expectancy by 1451 years on Venus!");
  });

  test("should successfully calculate the number of years past a given life expectancy for someone living on mars that has exceeded their life expectancy", () => {
    oldTest.addAge();
    oldTest.addExpectancy();
    oldTest.marsExpectancyBeatenCheck();
    expect(oldTest.marsBeaten).toEqual("You have outlived your life expectancy by 477 years on Mars!");
  });

  test("should successfully calculate the number of years past a given life expectancy for someone living on jupiter that has exceeded their life expectancy", () => {
    oldTest.addAge();
    oldTest.addExpectancy();
    oldTest.jupiterExpectancyBeatenCheck();
    expect(oldTest.jupiterBeaten).toEqual("You have outlived your life expectancy by 76 years on Jupiter!");
  });
});
