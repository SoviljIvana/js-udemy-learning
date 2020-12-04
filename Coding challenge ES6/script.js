/**
 * CODING CHALLENGE ES6
Suppose that you are working in a small town administration, and you are in
charge of two town elements.
1. Park
2. Streets

It is a very small town, so righ now there are only 3 parks and 4 streets. 
All parks and streets have a name and a build yaer.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density(gustina) of each park in the town(formula: number of trees/park area)
2. Average age of each town's park (formula: sum of all ages/number of parks)
3. The name of park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets:
tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features:
classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
 */


class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numberOfTrees) {
    super(name, buildYear);
    this.area = area;
    this.numberOfTrees = numberOfTrees;
  }

  treeDensity() {
    const density = this.numberOfTrees / this.area;
    console.log(`${density}`);
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(
      `${this.name}, build in ${this.buildYear}, is a  ${this.size} street.`
    );
  }
}
const allParks = [
  new Park("Green Park", 1987, 0.2, 215),
  new Park("National Park", 1894, 2.9, 3541),
  new Park("Oak Park", 1953, 0.4, 949),
];
const allStreets = [
  new Street("Ocean Street", 1987, 0.2, 5),
  new Street("Evergreen Street", 1894, 2.9, 2),
  new Street("4th Street", 1953, 0.4, 1),
  new Street("Sunset Boulevard", 1953, 0.4, 4),
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

  return [sum, sum / arr.length];
}

function reportPark(p) {
  console.log("PARK REPORT");

  //Density
  p.forEach((el) => el.treeDensity());

  //Average age
  const ages = p.map((el) => new Date().getFullYear() - el.buildYear);

  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

  // Which parks has more than 1000 trees
  const i = p.map((el) => el.numberOfTrees).findIndex((el) => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
    console.log('Street report');

    //Total and average length of the town's streets
    const[totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    s.forEach(el => el.classifyStreet());
}

reportPark(allParks);
reportStreets(allStreets);

