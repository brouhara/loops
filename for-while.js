/** 
 output of the problems is written on a single line for brevity; your solutions will output each value on a new line like in the example above.
0 100 200 300 400 500 600 700 800 900 1000
1 2 4 8 16 32 64 128
0 2 4 6 8 10
3 6 9 12 15
9 8 7 6 5 4 3 2 1 0
1 1 1 2 2 2 3 3 3 4 4 4
0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

Write a program...

that prints the numbers 1-25 and tells you whether that number is odd or even?

that prints the numbers from 1 to 50, however, for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

to sum the multiples of 3 and 5 under 1000.

that makes seven calls to console.log to output the following triangle:
 **/

// Increment 100
function one( number, increment ) {
    var i = 0;
    for(var x = 0; x <= number; x++, i +=100) {
        console.log(i);
    }
}

one( 10, 100 );

// Powers
function two( number ) {
    for(var x = 0; x < number; x++) {
        console.log( Math.pow(2, x));
    }
}

two( 8 );

// Add 2 n times
function three( number ) {
    var x = 0;
    for (var i = 0; i < number; i++, x += 2) {
        console.log(x);
    }
}

three( 10 );

// Add 3 starting from 3
function four( number ) {
    var i = 0;
    for ( var x = 0, i = 3; x < number; x++, i += 3) {
        console.log(i);
    }
}

four( 10 )

// Final Countdown
function five( number ) {
    for ( var x = --number; x >= 0; x--) {
        console.log(x);
    }
}

five( 10 );

// Repeater
function six( number ) {
    number++;
    for ( var x = 1; x < number; x++ ) {
        for (var i = 0; i < 3; i++) {
            console.log(x);
        }
    }
}

six( 4 );

// Repeat count to 0-4, n-1 times
function seven( number ) {
    number--;    
    if (number > 1) { seven( number ); }
    for ( var i = 0; i < 5; i++ ) {
        console.log(i);
    }
}

seven(4);

function EvenOdd( number ) {

    for ( var i = 1; i < 26; i++ ) { 
        if ( i % 2 ) {
            console.log( i + ": Even" );
        } else {
            console.log ( i + " Odd");
        }
    }

}

EvenOdd();

function FizzBuzz( number ) {

    for (var i = 1; i < 5; i++) {
        
        mod5 = 5 % i;
        mod3 = 3 % i;

        if ( mod5 && mod3 ) {
           console.log( i + ' FizzBuzz' );
        } else if ( mod3 ) {
            console.log( i + ' Fixx' );
        } else if ( mod5 ) {
            console.log( i + ' Buzz' );
        } else {
            console.log( i );
        }
    }
}

FizzBuzz();

function whileLoop( numer ) {
    var x = 0, y = 0, multiple = 0;

    var mod3 = [], mod5 = [];

    while (multiple < 1000) {

    }   
}


