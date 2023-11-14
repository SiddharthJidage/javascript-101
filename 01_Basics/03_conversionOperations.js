/*
conversions examples
number >> "33"=> 33
string >> "33abc" => NaN
Null >> Null=> 0
undefined >> undefined => NaN
boolean >> true => 1 ; false=> 0 
 */

let score = "33aasd";

console.log(typeof score);
console.log(typeof(score));


// conversion 
 let conversion = Number(score);
 console.log(typeof conversion);
 console.log(conversion);