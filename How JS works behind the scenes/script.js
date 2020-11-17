/*************
 * Hoisting
 */

calculateAge(1965);
function calculateAge(year) {
  console.log(2016 - year);
}

retirement(1990);
var retirement = function (year) {
  console.log(65 - (2016 - year));
};


console.log(age);
var age = 23;

function foo(){
    var age=65;
    console.log(age);
}
foo();
console.log(age);

/**
 * Example to show the difference between execution stack and scope chain
 *
 */

var a = "Hello";
first();

function first() {
  var b = "Hi";
  second();

  function second() {
    var c = "Hey";
    console.log(a + b + c);
  }
}

var a = "Hello";
first();

function first() {
  var b = "Hi";
  second();

  function second() {
    var c = "Hey";
    third();
  }
}

function third() {
  var d = "something";
  console.log(a + b + c + d);
}


/**
 * The THIS keyword
 *
 */

 calculateAge(1985);
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
  name: "john",
  yearOfBirth: 1990,
  calculateAge: function () {
    console.log(this);
    console.log(2016 - this.yearOfBirth);
  },
};

john.calculateAge();

var mark = {
    name : 'Mark',
    yearOfBirth: '1987'
}

 mark.calculateAge = john.calculateAge;
 mark.calculateAge();

