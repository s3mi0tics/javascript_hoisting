// 1)
console.log(hello);                                   
var hello = 'world';                                 
// var hello;
// console.log(hello); (gets logged as undefined)
// var hello = 'world';

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle; (needle is a declaration and gets hoisted to the top)
// function test(){
//     var needle;}(test also gets hoisted to the top with needle getting hoisted to the top of its scope )
// var needle = 'magnet'; (we assign a value to our function scoped needle)
//console.log(needle) (we log needle as 'magnet')


// 3)
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan; (gets hoisted)
// function print (); (gets hoisted)
// brendan; (gets hoisted to the top of its scope in the function)
// brendan = 'super cool' (assign a value to our globally scoped variable brendan)
// the function never gets called so the locally defined  brenden neve gets the value of 'only okay' and never gets loged
// console.log(brendan); (will log our globally scoped variable value of 'super cool' because the function didnt return a value)

// 4)
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food; (gets hoisted)
// function eat(); (gets hoisted)
// food; (gets hoisted to the top if its scope in its function)
// food = 'chicken'; (we assign a value to our global variable food)
// console.log(food); (global variable food gets logged as 'chicken')
// eat(); (function gets called)
// food = 'half chicken' (variable inside the scope of function gets the value)
// console.log(food); (food inside function gets logged as 'half chicken')
// var food = 'gone'; (food gets a new value in the scope of the function)

// 5)
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// mean(); (not a function, syntax error terminates program)

// 6)
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre; (gets hoisted)
// function rewind(); (gets hoisted)
// console.log(genre);(gets logged as undefined)
// genre = "disco"; (varible gets assigned a value)
// rewind(); (function gets called)
// genre = "rock"; (genre value gets reassigned within the scope of the function)
// console.log(genre);(genre gets logged as "rock")
// genre = "r&b; (genre gets reassigned the value of "r&b")
// console.log(genre);(gets logged as the newly assigned value of "r&b")
// console.log(genre);(disco makes a comeback and genre gets logged as the global value of "disco")

// 7)
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// dojo and learn() get hoisted;
// dojo gets assigned the value of "san jose";
// console.log(dojo);(gets logged as the value of "san jose")
// learn(); (function is called)
// dojo = "seattle";(dojo gets assigned the value of "seattle)
// console.log(dojo);(gets logged as "seattle")
// dojo = "burbank";(dojo gets assigned the value of "burbank)
// console.log(dojo);(gets logged as "burbank")
// console.log(dojo);(gets logged as "san jose" as the function never returned anything that effected the globally defined variable)

// 8)
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        // dojo = "closed for now";
    }
    return dojo;
}
// (first we will get a syntax error because dojo is a constatnt and on line 127 we try and change the value, however if we remove this line it goes as follows)
// function makeDojo gets hoisted;
// console.log(makeDojo("Chicago", 65));(function is called passing in the arguments of "Chicago" and 65)
// const dojo = {};(constant dojo gets declared and assigned a value of an empty object)
// dojo.name = name;(the object at the key of name is equal to the first argument passed into the function)
// dojo.students = students;(the object at the key of students is equal to the second argument passed into the function)
// return dojo: (output will be {name:"Chicago", students: 65, hiring: true})
// console.log(makeDojo("Berkley", 0));(function is called passing in the arguments of "Berkley" and 0)
// const dojo = {};(constant dojo gets declared and assigned a value of an empty object)
// dojo.name = name;(the object at the key of name is equal to the first argument passed into the function)
// dojo.students = students;(the object at the key of students is equal to the second argument passed into the function)
// return dojo: (output will be { name: 'Berkley', students:0 })
