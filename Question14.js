
const prompt=require("prompt-sync")();


const Guests=[];

const size=prompt("Enter the number of people you want to invite");

for(var i=0;i<size;i++)
{
    Guests[i]=prompt("i would like to invite ");
}
for(var i=0;i<size;i++)
{
    console.log(" congrats! "+ Guests[i]+" You are invited ");
}


console.log(Guests);