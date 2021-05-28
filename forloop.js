var ronIsADick = "132sdf";


var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function checking4ALetter(arg1, arg2) {
    for(var i = 0; i < arg1.length; i++) { //what do
        //console.log(arg1[i]);
        for(var j = 0; j < arg2.length; j++) {
        //console.log(arg2[j]);  //a
        if(arg1[i] === arg2[j]) {
            return true;        
        } 
        }
    }
}

// console.log(checking4ALetter(ronIsADick, alphabet));
var letterFound = checking4ALetter(ronIsADick, alphabet);
if(letterFound) {
    console.log(true);
} else {
    console.log(false);
}




//Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of
// the number and for the
// multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// target is 6 lines of code including 

