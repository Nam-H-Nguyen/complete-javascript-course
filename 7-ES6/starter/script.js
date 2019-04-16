class Town {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extend Town {
    constructor(name, buildYear, numTrees, area) {
        super(name, buildYear);
        this.numTrees = numTrees;
        this.area = area;

        calcTreeDensity() {
            let density = this.numTrees/this.area;
            console.log(`${this.name} has a tree density of ${density} per km^2`);
        }
    }
}

class Street extend Town {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;

        classifyStreet() {
            let classification = new Map();
            classification.set(1, 'tiny');
            classification.set(2, 'small');
            classification.set(3, 'normal');
            classification.set(4, 'big');
            classification.set(5, 'huge');

            console.log(`${this.name} built in ${this.year} is a ${classification.get(this.size)} sized street.`);
        }
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calcStreetLength(...allStreets) {
    // Total = Add all the length of the street lengths
    // Average = Total / number of streets in town
    // Return an array of total and average lengths
    let total = 0;
    let average = 0;

    allStreets.forEach(cur => total += cur.length);
    average = total / allStreets.length;
    return [total, average];
}

function reportParks(park) {
    console.log('-----PARKS REPORT-----');

}

function reportStreets(street) {
    console.log('-----STREETS REPORT-----');

    let [totalLength, avgLength] = calcStreetLength(street);
    console.log(`Our ${street.length} have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    street.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
