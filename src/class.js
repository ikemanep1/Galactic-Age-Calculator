
//back end

export function Storage(age, expectancy) {
  this.age = age;
  this.expectancy = expectancy;
}

Storage.prototype.addAge = function() {
  if (this.age === "" ) {
    return ("please enter an actual number");
  } else {
    this.mercuryAge = Math.floor(this.age / .24);
    this.venusAge = Math.floor(this.age / .62);
    this.marsAge = Math.floor(this.age / 1.88);
    this.jupiterAge = Math.floor(this.age / 11.86);
  }
};

Storage.prototype.addExpectancy = function() {
  if (this.expectancy === "") {
    return ("please enter an actual number");
  } else {
    this.mercuryExpectancy = Math.floor(this.expectancy / .24 - this.mercuryAge);
    this.venusExpectancy = Math.floor(this.expectancy / .62 - this.venusAge);
    this.marsExpectancy = Math.floor(this.expectancy / 1.88 - this.marsAge);
    this.jupiterExpectancy = Math.floor(this.expectancy / 11.86 - this.jupiterAge);
  }
};

Storage.prototype.mercuryExpectancyBeatenCheck = function() {
  let mercuryRemainder = this.mercuryAge - this.mercuryExpectancy;
  if (mercuryRemainder > 0) {
    this.mercuryBeaten = "You have outlived your life expectancy by " + mercuryRemainder + " years on Mercury!";
  }
};

Storage.prototype.jupiterExpectancyBeatenCheck = function() {
  let jupiterRemainder = this.jupiterAge - this.jupiterExpectancy;
  if (jupiterRemainder > 0) {
    this.jupiterBeaten = "You have outlived your life expectancy by " + jupiterRemainder + " years on Jupiter!";
  }
};

Storage.prototype.venusExpectancyBeatenCheck = function() {
  let venusRemainder = this.venusAge - this.venusExpectancy;
  if (venusRemainder > 0) {
    this.venusBeaten = "You have outlived your life expectancy by " + venusRemainder + " years on Venus!";
  }
};

Storage.prototype.marsExpectancyBeatenCheck = function() {
  let marsRemainder = this.marsAge - this.marsExpectancy;
  if (marsRemainder > 0) {
    this.marsBeaten = "You have outlived your life expectancy by " + marsRemainder + " years on Mars!";
  }
};
// Storage.prototype.ExpectancyBeatenCheck = function() {
//   let mercuryRemainder = (age - expectancy) / .24;
//   let venusRemainder = (age - expectancy) / .62;
//   let marsRemainder = (age - expectancy) / 1.88;
//   let jupiterRemainder = (age - expectancy) / 11.86;
//   if ()
// }
