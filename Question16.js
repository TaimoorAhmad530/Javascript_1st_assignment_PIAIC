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
