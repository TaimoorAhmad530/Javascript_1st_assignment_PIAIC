const Guests=['Taimoor','Ali','Ahmad'];

for(var i=0;i<Guests.length;i++)
{
    console.log("I would like to invite "+ Guests[i] );
}


console.log('Ali can not make dinner tonight');

console.log("********");

console.log("Removing Ali from array\n\n");

for(var i=0;i<Guests.length;i++)
{
    if(i==1)
    {
        Guests.splice(i,1);
    }
    console.log(Guests[i]);
}

console.log("********");
//adding new item in array

Guests[2]='Aslam';

console.log('new list\n');

console.log("********");

for(var i=0;i<Guests.length;i++)
{
    console.log(Guests[i]);
}



