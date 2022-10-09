var str1='Ali';
var str2='Ahmad';

console.log(str1==str2);

var str3='aslam';
var str4='ASLAM';

console.log(str3==str4);

const x=1;
const y=2;

console.log(x==x);
console.log(x==y);

console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);

console.log(x<y && y>x);//true
console.log(x<y || y>x);

//testing whether the item is in an array

const person=[];
person[0]= "Aslam";
person[1]= "Ahmad";
person[2]= "Taimoor";

if(person[0]=='Aslam')
{
    console.log(person[0]);
}
else if(person[0]!='Taimoor')
{
    console.log('Taimoor');
}