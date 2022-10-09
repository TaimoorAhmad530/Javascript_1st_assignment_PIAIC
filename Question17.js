const Guests=['Taimoor','Ali','Ahmad'];

Guests.unshift('zain');//adding element in begining

console.log("*********\n");

for(var i=0;i<Guests.length;i++)
{
    console.log("Warmly welcome to " + Guests[i]);
}

console.log("*********\n");

Guests.push('Waleed');//adding element at end

for(var i=0;i<Guests.length;i++)
{
    console.log("Warmly welcome to " + Guests[i]);
}

console.log("*********\n");

Guests.splice(3,0,'usman');//adding element at index 3

for(var i=0;i<Guests.length;i++)
{
    console.log("Warmly welcome to " + Guests[i]);
}

console.log(Guests);
//[ 'zain', 'Taimoor', 'Ali', 'usman', 'Ahmad', 'Waleed' ]

//above program is a program of question 16

console.log("You can only invite two people\n");

var guest1=Guests.pop();

console.log("sorry " + guest1 +" We can not invite you! ");

var guest2=Guests.pop();

console.log("sorry " + guest2 +" We can not invite you! ");

var guest3=Guests.pop();

console.log("sorry " + guest3 +" We can not invite you! ");

var guest4=Guests.pop();

console.log("sorry " + guest4 +" We can not invite you! ");

console.log("\n**********\n");

for(var i=0;i<Guests.length;i++)
{
    console.log(Guests[i] +" You are still invited ");
}

//console.log(Guests.length);

for(var i=0;i<Guests.length;i++)
{
    Guests.pop();
}

console.log(Guests);