//Variables and data types
/*console.log('Gucci Gang');
var firstName = 'John';
console.log(firstName); 

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);


//Variable mutation and type coercion
/*var firstName;
var age;

//Type coercion

console.log(firstName +' '+ age);

var job, isMarried;
isMarried = false;
console.log(firstName + ' is a '+ age + ' year old ' +job+ '. is he married? '+ isMarried);

//VAriable Mutation

age  = 'twenty eight';
job = 'driver';
console.log(firstName + ' is a '+ age + ' year old ' +job+ '. is he married? '+ isMarried);

var lastName =  prompt('what is his last name?');
console.log(firstName +' '+ lastName);

//Basic Operators
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearMark);

//Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//Type of operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/ 

/*
//Operator Precedence
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Mulltiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple Assignments
var x, y;
x = (3 + 5) * 4 - 6;
console.log(x);

//More operators
x *= 2;
console.log(x);
*/

/*
//Solve problem
var markMass = 80;
var markHeight = 1.75;
var johnMass = 78.5;
var johnHeight = 1.78;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

higherBMI = markBMI > johnBMI;
console.log('Is Mark BMI higher than John? ' +higherBMI);
*/

/*
//If and else statements
var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}

var isMarried = true;
if(isMarried){
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}

var markMass = 80;
var markHeight = 1.75;
var johnMass = 78.5;
var johnHeight = 1.78;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

if(markBMI > johnBMI){
    console.log('Mark\'s BMI is higher than John\'s! ');
} else {
    console.log('Mark\s BMI is not higher than John\'s!');
}

//higherBMI = markBMI > johnBMI;
//console.log('Is Mark BMI higher than John? ' +higherBMI);
*/

//Boolean Logic
/*
var firstName = 'John';
var age = 20;

if(age < 13){
    console.log(firstName + ' is a boy!');
} else if (age >= 13 && age < 20) {//between 13 and 20
    console.log(firstName + ' is a teenager!');
} else if(age >= 20 && age < 30) {
    console.log(firstName + ' is a young man!');
} else {
    console.log(firstName + ' is a man!');
}
*/

//The Ternary operator and switch statements
/*
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer!')
: console.log(firstName + ' drinks juice!');

var drink  = age >= 18? 'beer' : 'juice';
console.log(drink);

var job = 'teacher';
switch(job){
    case 'teacher':
    console.log(firstName + ' teaches kids how to code');
    break;
    case 'driver':
    console.log(firstName + ' drives an uber in Lisbon');
    break;
    case 'designer':
    console.log(firstName + ' designs beautiful websites');
    break;
    default: 
    console.log(firstName + ' does something else!');
}

switch(true){
    case age < 13:
    console.log(firstName + ' is a boy');
    break;
    case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager');
    break;
    case age >= 20 && age < 30:
    console.log(firstName + ' is a young man');
    break;
    default:
    console.log(firstName + ' is a man');
}
*/

//Truthy and Falsy values and equality operators

/*var height;
height = 23;

if(height || height === 0){
    console.log('variable is defined');
} else {
    console.log('variable has not been defined');
}

//Equality operators
if(height == '23'){
    console.log('The == operator does type coercion!');
}
*/

//Solve problem 
/*var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary){
    console.log('John\'s high score of '+scoreJohn+' wins!');
} else if(scoreMike > scoreJohn && scoreMike > scoreMary){
    console.log('Mike\'s high score of '+scoreMike+' wins!');
} else if(scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s high score of '+scoreMary+' wins!');
} else {
    console.log('it\'s a TIE!');
}
*/

//Functions
/* 
function calculateAge(birthYear){
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(firstName + ' retires in '+retirement+ ' years');
    } else {
        console.log(firstName + ' is retired');
    }
}
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

//Function Statements and Expressions
/*
var whatDoYouDO = function(job, firstName){
    switch(job){
        case 'teacher':
        return firstName + ' teaches kids how to code';
        case 'driver':
        return firstName + ' drives a cab in the city';
        case 'designer':
        return firstName + ' designs beautiful websites';
        default: 
        return firstName + ' does something else';
    }
}
console.log(whatDoYouDO('teacher', 'John'));
console.log(whatDoYouDO('designer', 'Jane'));
console.log(whatDoYouDO('retired', 'Mark'));
*/


//Arrays
/*var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Different data types
var  
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);


function tipCalc (bill){
    var percentage;
    if(bill<50){
        percentage = 0.2;
    } else if (bill >= 50 && bill < 200){
        percentage = .15;
    } else {
        percentage = .10;
    }
    return percentage * bill;
}
var bills = [124, 48, 268];
var tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
var finalBill = [bills[0]+tips[0]];
console.log(bills, tips, finalBill);
*/


//OBJECTS AND PROPERTIES-------------------------------------
//Objectr Literal
/*var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', "Bob", 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.job);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//New object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/


//OBJECTS AND METHODS--------------------------------------
/*var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', "Bob", 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function (){
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);


var john = {
    fullName: 'John Smith',
    mass: 78.5,
    height: 1.78,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
    }
};

var mark = {
    fullName: 'Mark Roe',
    mass: 80,
    height: 1.75,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
    }
};
mark.calcBMI();
john.calcBMI();

if(john.bmi > mark.bmi){
    console.log(john.fullName+ ' has the highest BMI of ' + john.bmi);
} else if(mark.bmi > john.bmi) {
    console.log(mark.fullName+ ' has the highest BMI of ' + mark.bmi);
} else {
    console.log('They both have the same BMI');
}
*/


//LOOPS AND ITERATION----------------------------------------
/*for (var i = 0; i < 10; i++){
    console.log(i);
}
 
var john = ['John', 'Smith', 1990, 'designer', false];
for(var i = 0; i < john.length; i++){
    console.log(john[i]);
}

//WHile loop
var i = 0;
while(i < john.length){
    console.log(john[i]);
    i++;
}*/

//Continue and break staements------------------------------
/*var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') {
        continue;
    }
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') {
        break;
    }
    console.log(john[i]);
}

//Looping backwards
for (var i = john.length - 1; i >= 0; i--){
    console.log(john[i]);
}
*/

var john = {
    fullName: 'John Roe',
    bills: [124, 48, 268, 180, 42],
    tip: [],
    finalBill: [],
    calcTip: function(){
        for(var i = 0; i < this.bills.length; i++){
            //Determine % on tipping rules
            var percent;
            var bill = this.bills[i];
            if(bill<50){
                percent = 0.2;
            } else if (bill >= 50 && bill < 200){
                percent = .15;
            } else {
                percent = .10;
            }
            this.tip[i] = bill * percent;
            this.finalBill[i] = bill + bill * percent;
        }
    }
};
john.calcTip();
console.log(john);

