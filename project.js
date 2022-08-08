 var x=42
 if (x % 7==0) {
     console.log('true');
}
 else  {
     console.log('false');
    }

var x=10;
var y=30;
var z=15;
if(x>y && x>z){
    console.log(x,'is greater');
}
else if (y>z && y>x) {
    console.log(y,'is greater');
    
}
else if (z>x && z>y) {
    console.log(z,'is greater');
}

var x=8;
var y=3;
var z=10;
if(x>y && x>z && y>z){
    console.log(z,y,x);
}
else if(y>z && y>x && z>x){
    console.log(x,z,y);
}
else if (z>x && z>y && x>y) {
    console.log(y,x,z);
}
var maleage=25;
if (maleage>12) {
    console.log('male',maleage,'eligible');  
}
else {
    console.log('noteligible'); 
}
var femaleage=21;
if (femaleage>18) {
    console.log(femaleage, 'female','eligible');  
}
else {
    console.log('noteligible'); 
}

var age=26;
var gender='male';
var maritalstatus='single';
if(maritalstatus=='married'){
    console.log('yor are already married');
}
else if(gender=='male' && maritalstatus=='single' && age>=25){
    console.log('you are eligible to marry');
}
var age2=21;
var gender2='female';
var maritalstatus2='single';
if(maritalstatus2=='married'){
    console.log('yor are already married');
}
else if(gender2=='male' && maritalstatus2=='single' && age2>=21){
    console.log('you are eligible to marry');
}
else
console.log('you are not eligible to marry');

var x=7;
console.log('x=',x);

if (x==1) {
    console.log('one'); 
}
else if (x==2) {
    console.log('two');   
}
else if (x==3) {
    console.log('three');   
}
else if (x==4) {
    console.log('four');   
}
else if (x==5) {
    console.log('five');   
}
else if (x==6) {
    console.log('six');   
}
else if (x==7) {
    console.log('seven');   
}

else if (x==8) {
    console.log('eight');   
}

else if (x==9) {
    console.log('nine');
}
// program table
var a=20;
for(i=1; i<=20; i++){
    console.log('a=',i*a);
}
// program series
var range=5;
for(var i=1;i<=range;i++){
    for(j=1;j<=i;j++){
    console.log(i);
    console.log('\t');
}
}
var a=50;
var b=25;
console.log('a value is =',a);
console.log('b value is =',b);
function add(a,b) {
    c=(a+b);
    console.log('a+b=',c);
}
add (a,b)

//substraction
var a=50;
var b=25;

function substraction(a,b) {
    c=(a-b);
    console.log('a-b=',c);
}
substraction(a,b)

//multiplication
var a=50;
var b=25;
c;
function multipication(a,b) {
    c=(a*b);
    console.log('a*b=',c);   
}
multipication(a,b)

//division
var a=50;
var b=25;
c;
function division(a,b) {
    c=(a/b);
    console.log('a/b=',c);   
}
division(a,b)

//vowels
// var vowels=['a','e','i','o','u'];
// console.log(vowels.includes('o'));
// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}