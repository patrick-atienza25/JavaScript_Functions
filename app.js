console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i= 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(10);
printOdds(100); 

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name, age) {
    let oldEnoughMsg = `Congrats ${name}, you can drive!`;
    let tooYoungMsg = `Sorry ${name}, but you need to wait until you're 16.`;
    

    if (age < 16) {
        console.log(tooYoungMsg);
    } else {
        console.log(oldEnoughMsg);
    }
}

// Exercise 3 Section
function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0) {
        return "Quadrant 4";
    } else if (x == 0 && y != 0) {
        return "X Axis";
    } else if ( x!= 0 && y == 0) {
        return "Y Axis";
    } else {
        return "Origin";
    }
}  

// Exercise 4 Section
function isValidTriangle(a, b, c) {
    return a + b > c || a + c > b || b + c > a;
}
function checkTriangle(a, b, c) {
    let isValid = (a, b, c);
    if (isValid) {
        if(a == b && b == c) {
            return `Equilateral`;
        } else if (a == b || b == c || a == c) {
            return `Isosceles`;
        } else {
            return `Scalene`;
        }
    } else {
        return `Invalid`
    }
}

// Exercise 5 Section
function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let statusMsg;

    console.log(`${day} day(s) used, ${periodLength - day} day(s) remaining`);
    console.log(`Average projected use: ${projectedAvg.toFixed(2)} GB/day`);

    if (currentAvg > projectedAvg) {
        statusMsg = "Exceeding"
    } else  if (currentAvg < projectedAvg) {
        statusMsg = "Under";
    } else {
        statusMsg = "At";
    }

    console.log(`You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} GB/day),
    continuing this usage, you'll end up using ${planLimit - (usage + projectedUsage)} GB from your data limit.
    To stay below your data plan use no more than ${(remainingData / remainingDays).toFixed(2)} GB/day.`);
}