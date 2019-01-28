///////////////////////////////////////
// Lecture: Hoisting

//functions
function calculateage(year){
    console.log(2016 - year);
}
calculateage(1990);

var retirement = function(year){
    console.log(65 - (2016 - year));
}

retirement(1990);

//variable 
console.log(age);//
var age = 23;
console.log(age);

function foo(){
    var age = 65;
    console.log(age);
}
foo();
console.log(age);







///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
function calculateage(year){
    console.log(2016 - year);
    console.log(this);
}
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateage: function(){
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        /*
        function innderFunction(){
            console.log(this);
        }
        innderFunction();
        */
    }
};
john.calculateage();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateage = john.calculateage;//You are borrowing the method from the 'john' object to use for 'mike' object
mike.calculateage();







