/**************
 * Variables and data types
 */

var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

// single line comment
var _years = 3;
console.log(_years);

// Type coercion
var firstName = "John";
var age = 28;

console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(
  firstName + " " + age + " year old " + job + ". Is he married? " + isMarried
);

// Variable mutation
age = "twenty eight";
job = "driver";

alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

var lastName = prompt("What is his last Name?");
console.log(firstName + " " + lastName);

/*******************
 * Basic operators
 */

var now, ageJohn, ageMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
var yearJohn = year - ageJohn;
var johnMark = year - ageMark;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder); //return type of variable
console.log(typeof ageJohn);
console.log(typeof "Mark is older tha John");
var x;
console.log(typeof x);

/************
 * Operator precedence
 */

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x = x * 2;
console.log(x);

/*************
 * CODING CHALLENGE 1
 */
/*
Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using th formula:
BMI = mass / height ^ 2 = mass / (height * height).
(mass in kg and heigt in meter).

1. Store Mark's and John's mass and higher in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print from step 3.(Something like "Is Mark's BMI higher that John's true").

*/
//solution

var markHeight, johnHeight, markMass, johnMass;
markHeight = 1.69; //meters
markMass = 78; //kg
johnHeight = 1.95; //meters
johnMass = 92; //kg
var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log("Mark BMI is: " + markBMI + " and John BMI is: " + johnBMI);
var compareMarkAndJohnBMIs = markBMI > johnBMI;
console.log("Is Mark/s BMI heigher than John/s?" + compareMarkAndJohnBMIs);

/****
 * If / else statements
 */

var firstName = "John";
var civilStatus = "married";
if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + "will hopefully marry soon");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + "will hopefully marry soon");
}

/*****
 * Boolean logic
 */

var firstName = "John";
var age = 16;

if (age < 13) {
  console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager.");
} else {
  console.log(firstName + " is a man.");
}

var firstName = "John";
var age = 16;

// ternary operator
age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log((firstName = " drinks juice."));

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

// switch statement
var job = "teacher";
switch (job) {
  case "teacher":
    console.log(firstName + " teaches kids how to code");
    break;
  case "driver":
    console.log(firstName + " drives an uber in Libson.");
    break;
  default:
    console.log(firstName + " does something else.");
}

//falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values

var height;
height = 0;
if (height) {
  console.log("Variable is defines");
} else {
  console.log("Variable has not been defined");
}

// Equality operators

// result is true
if (height == "23") {
  console.log("The == operator does type coercion!");
}

//result is false because integer and string are not the same
if (height === "23") {
  console.log("The == operator does type coercion!");
}

/*****
 * CODING CHALLENGE 2
 */

/*
 John and Mike both play basketball in different teams. In the latest 3 games, John's scored 189,
 120 and 103 points, while Mike's team scored 129, 94 and 123 points.

 1.Calculate the average score for each team
 2. Decide which teams wins in average (heighest average score), and print the winner to the console.
 Also include the average score in the output.
 3. Then change the scores to show different winners.
 Don't forget to take into account there might be a draw (the same average score)

 4.EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, 
 log the average winner to the console.
 HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution,
  it's no problem.
 5. Like before, change the scores different winners, keeping in mind there might be draws.

 */

var mikeTeamSum = 129 + 123 + 94;
var johnTeamSum = 189 + 120 + 103;
var mikeTeamAverage = mikeTeamSum / 3;
var johnTeamAverage = johnTeamSum / 3;
console.log("Team 1(Mike), average is " + mikeTeamAverage);
console.log("Team 2(John), average is " + johnTeamAverage);
var winner;
if (mikeTeamAverage > johnTeamAverage) {
  console.log("Winner is first team - MIKE");
  winner = "mike";
} else if (mikeTeamAverage < johnTeamAverage) {
  console.log("Winner is second team - JOHN");
  winner = "john";
} else {
  console.log("The same result! :( ");
}

var maryTeamSum = 97 + 134 + 105;
var maryTeamAverage = maryTeamSum / 3;
console.log("Mary average: " + maryTeamAverage);
if ((winner = "john" && johnTeamAverage > maryTeamAverage)) {
  console.log("Final winner is John");
} else if ((winner = "john" && johnTeamAverage < maryTeamAverage)) {
  console.log("Final winner is Mary");
} else if ((winner = "mike" && mikeTeamAverage > maryTeamAverage)) {
  console.log("Final winner is Mike");
} else {
  console.log("Final winner is Mary");
}

/****
 * FUNCTIONS
 */

function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMake = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMake, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + "is already retired.");
  }
}

yearsUntilRetirement(1990, "John");

/****
 * Function Statements and Expressions
 */

//function expression

var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code";
    case "driver":
      return firstName + " drives a cab in Lisbon";
    case "designer":
      return firstName + " designs beautiful websites";
    default:
      return firstName + " does something else";
  }
};

console.log(whatDoYouDo("teacher", "John"));

/************************
 * Arrays
 */

//initialize new array

var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1961, 1948);

console.log(names);
console.log(names[0]);
console.log(names.length);

//muttate array data
names[1] = "Ben";
console.log(names);

names[5] = "Marry";
console.log(names);

// Different data types
var john = ["John", "Smith", 1990, "teacher", false];
john.push("blue");
console.log(john);
john.unshift("Mr.");
console.log(john);
john.pop();
john.pop();
console.log(john);

console.log(john.indexOf(1980)); //return -1 if doesn't exist in array

/****************
 *
 * CODING CHALLENGE 3
 */
/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268

To tip the weiter a fair amount, John created a simple tip calculator(as a funciton).
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10%
if the bill is more than $200.

In the end, John would like to have 2 arrays:
1. Containing all three tips (one for each bill)
2. Containing all three final paid amounts(bill + tip)

NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2

*/

function calculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else if (bill > 200) {
    percentage = 0.1;
  }

  return bill * percentage;
}

var firstArray = [calculator(40), calculator(100), calculator(240)];
console.log(firstArray);

var secondArray = [
  40 + calculator(40),
  100 + calculator(100),
  240 + calculator(240),
];
console.log(secondArray);

/****
 * Objects and properties
 */

//object literal
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
};
console.log(john.firstName);
console.log(john["lastName"]);
var x = "birthYear";
console.log(john[x]);

john.job = "designer";
john["isMarried"] = true;
console.log(john);

//new Object syntax
var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1990;
jane["lastName"] = "Smith";
console.log(jane);

/******
 * Objects and methods
 */

var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function () {
    this.age = 2018 - this.birthYear;
  },
};

john.calcAge();
console.log(john);

/****************
 *
 * CODING CHALLENGE 4
 */
/*
------------first task-----------
Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using th formula:
BMI = mass / height ^ 2 = mass / (height * height).
(mass in kg and heigt in meter).

1. Store Mark's and John's mass and higher in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print from step 3.(Something like "Is Mark's BMI higher that John's true").
-----------challenge 4----------
1.for each of team, create an object with properties for their full name, mass, and height
2.Then, add a method to each object to calculate the BMI.
Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the heighest BMI, together with the full name and the respective BMI.
Don't forget they might have the same BMI.

*/

var john = {
  nameAndSurname: "John",
  mass: 90,
  height: 1.95,
  bmi: function () {
    return this.mass / (this.height * this.height);
  },
};

var mark = {
  nameAndSurname: "Mark",
  mass: 78,
  height: 1.69,
  bmi: function () {
    return this.mass / (this.height * this.height);
  },
};

if (mark.bmi() > john.bmi()) {
  console.log("Winner is Mark");
} else if (mark.bmi < john.bmi) {
  console.log("Winner is John");
} else {
  console.log("The same results");
}

/*****
 * Loops and iterations
 */

for (var i = 0; i <= 9; i += 2) {
  console.log(i);
}

var john = ["John", "Smith", 1990, "designer", false];
console.log(john[0]);
console.log(john[1]);
console.log(john[2]);
console.log(john[3]);

// for loop
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// while loop
var i = 0;
while (i < john.length) {
  console.log(john[i]);
}

// continue and break statements

var john = ["John", "Smith", 1990, "designer", false];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}

//Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}

/******
 * CODING CHALLENGE 5
 */
/*
Remember the tip calculator chellange? Let's create a more advanced version using everything we learned!

This time, John and his family went 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 
1)a new array containing all tips, and
2)an array containing final paid amounts (bill + tip).
HINT Start with two empty arrays as properties and then fill them up in the loop.


EXTRA AFTER FINISHING:
Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110 and $45.
Mark likes to tip 20% of the bill when bill is less then $100, 10% when the bill is between $100 and $300, and 25%
if the bill is more than $300.

5. Implement the same functionality as before, this time using Mark's tipping rules.
6. Create a function (not a method) to calculate the average of a given array of tips. 
HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0).
After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average.
*/

//john

var finalArray = [];
var sumOfBillsWithTipsJohn = 0;
var john = {
  firstName: "John",
  surName: "Smith",

  function(arrayBills) {
    var percentage;
    for (var i = 0; i < arrayBills.length; i++) {
      if (arrayBills[i] < 50) {
        percentage = 0.2;
        finalArray.push(arrayBills[i] * percentage);
      } else if (arrayBills[i] >= 50 && arrayBills[i] < 200) {
        percentage = 0.15;
        finalArray.push(arrayBills[i] * percentage);
      } else if (arrayBills[i] > 200) {
        percentage = 0.1;
        finalArray.push(arrayBills[i] * percentage);
      }
    }

    for (var i = 0; i < finalArray.length; i++)
      for (var y = 0; y < arrayBills.length; y++) {
        if (i === y) {
          sumOfBillsWithTipsJohn += arrayBills[i] + finalArray[i];
        }
      }

    return (
      "FIRST RESTAURANT TIP " +
      finalArray[0] +
      " SECOND RESTAURANT TIP " +
      finalArray[1] +
      " THIRD RESTAURANT TIP " +
      finalArray[2] +
      " FOURTH RESTAURANT TIP " +
      finalArray[3] +
      " FIFTH RESTAURANT TIP " +
      finalArray[4] +
      "  " +
      "bill + tip:" +
      " FIRST RESTAURANT BILL + TIP  " +
      (finalArray[0] + arrayBills[0]) +
      " SECOND RESTAURANT BILL + TIP  " +
      (finalArray[1] + arrayBills[1]) +
      " THIRD RESTAURANT BILL + TIP  " +
      (finalArray[2] + arrayBills[2]) +
      " FOURTH RESTAURANT BILL + TIP  " +
      (finalArray[3] + arrayBills[3]) +
      " FIFTH RESTAURANT BILL + TIP  " +
      (finalArray[4] + arrayBills[4])
    );
  },
};

console.log(john.firstName);
console.log(john.surName);
var arrayBills = [124, 48, 268, 180, 42];
console.log(john.function(arrayBills));

function averageTipsJohn() {
  var sum = 0;
  for (var i = 0; i < finalArray.length; i++) {
    sum += finalArray[i];
  }
  console.log(sum);
  return sum / finalArray.length;
}
console.log("Average-TIP: " + averageTipsJohn()); //18

function averageFamilyJohn() {
  return sumOfBillsWithTipsJohn / finalArray.length;
}
console.log("Family average: " + averageFamilyJohn());

//mark
var finalArray = [];
var sumOfBillsWithTipsMark = 0;
var mark = {
  firstName: "Mark",
  surName: "Smith",

  function(arrayBills) {
    var percentage;
    for (var i = 0; i < arrayBills.length; i++) {
      if (arrayBills[i] < 100) {
        percentage = 0.2;
        finalArray.push(arrayBills[i] * percentage);
      } else if (arrayBills[i] >= 100 && arrayBills[i] < 300) {
        percentage = 0.1;
        finalArray.push(arrayBills[i] * percentage);
      } else if (arrayBills[i] > 300) {
        percentage = 0.25;
        finalArray.push(arrayBills[i] * percentage);
      }
    }
    for (var i = 0; i < finalArray.length; i++)
      for (var y = 0; y < arrayBills.length; y++) {
        if (i === y) {
          sumOfBillsWithTipsMark += arrayBills[i] + finalArray[i];
        }
      }
    return (
      "Tips: 1. " +
      finalArray[0] +
      " 2. " +
      finalArray[1] +
      " 3. " +
      finalArray[2] +
      " 4. " +
      finalArray[3] +
      " bills with tips:" +
      " 1. " +
      (finalArray[0] + arrayBills[0]) +
      " 2. " +
      (finalArray[1] + arrayBills[1]) +
      " 3. " +
      (finalArray[2] + arrayBills[2]) +
      " 4. " +
      (finalArray[3] + arrayBills[3])
    );
  },
};
function averageTipsMark() {
  var sum = 0;
  for (var i = 0; i < finalArray.length; i++) {
    sum += finalArray[i];
  }
  console.log(sum);
  return sum / finalArray.length;
}

console.log(mark.firstName);
console.log(mark.surName);
var arrayBills = [77, 375, 110, 45];
console.log(mark.function(arrayBills));
console.log("Average -tip: " + averageTipsMark()); //43.05

function averageFamilyMark() {
  return sumOfBillsWithTipsMark / finalArray.length;
}
console.log("Family average: " + averageFamilyMark());

if (averageTipsMark > averageTipsJohn) {
  console.log("Heghest average: Mark " + averageTipsMark());
} else if (averageTipsMark < averageTipsJohn) {
  console.log("Heghest average: John " + averageTipsJohn());
} else {
  console.log("The same results");
}
