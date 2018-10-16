var i = 0;
while(i < 10) {
    console.log(i);
    i++;
}

var numbers = [33,5,2,3,34];

numbers.forEach(function(number){
    console.log(number);
});

for(i = 0; i < numbers.length; i++){
    console.log(numbers);
}

var var1 = 3;
var var2 = 4;
if(var1 == var2 || var1 == 3){
    console.log('This is true');
}else{
    console.log('This is false');
}

var fruit = 'bananas';

switch(fruit){
    case 'bananas':
    alert('I love bananas');
    break;
    case 'apple':
    alert('yes for apples');
    break;
    case 'orange':
    alert('oranges are good');
    break;
    default: alert('i love all fruits');
    break;
}

//Object literal
var person = {
    firstName: 'Erik',
    lastName: 'Gardea',
    age: '25',
    cars: ['ford', 'honda'],
    address: {
        street: '123 street',
        city: 'yes city',
        state: 'murica'
    },
    fullName: function(){
        return this.firstName+' '+this.lastName;
    }
}
console.log(person.fullName());

//Object Cunstructor
