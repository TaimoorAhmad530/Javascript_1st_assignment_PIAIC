
const prompt=require("prompt-sync")();

var sandwitch_items=[];
var c=prompt("Enter the no. of items you want to add in sandwitch\n");

for(var i=0;i<c;i++)
{
    sandwitch_items[i]=prompt("Enter the adding "+(i+1));
}

console.log(sandwitch_items);
