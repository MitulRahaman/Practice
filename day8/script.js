/*
//string data
'Hellp Pluto'

//integer data
12331

//float data
1.3, 65.009, 311.42

//boolean data
true / false; 0 / 1;

//array data
['hello', 2, false]

//operator
+ - * /

//logical operator
AND, OR
*/

var number = 32;

var number2 = 50;

var result = number - number2;

console.log(result);

//add
var var1 = 44;
var var2 = 89;
var var3 = 432; 
var var4 = 76;
console.log(var1 + var2 + var3 + var4);

//sub
var var1 = -87;
var var2 = 922;
var var3 = 87;
var var4 = 42;
console.log(var1 - var2 - var3 - var4);

//bool check
var bol1 = 87;
var bol2 = 90;
console.log(bol1 == bol2);

var bol1 = 40;
var bol2 = "40";
console.log(bol1 == bol2);
console.log(bol1 === bol2);

var bol1 = 'salam';
var bol2 = 'selim';
console.log(bol1 == bol2);

var bol1 = 76.98;
var bol2 = 56.98;
console.log(bol1 == bol2);

//array
//loop sum
var number = [22, 33, 44, 54];
var sum = 0;
for (var i = 0; i < number.length; i++) {
    sum += number[i];
}
console.log(sum);

//position sum
var sum = number[0] + number[1] + number[2] + number[3];
console.log(sum);


