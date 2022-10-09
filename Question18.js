const places=['Nathiagali','Silicon Valley','Turkey','Saudia','Ireland'];

for(var i=0;i<places.length;i++)
{
    console.log(places[i]);
}


console.log("\n***********\n");
console.log("\nin alphabetical order\n");

var new_places=places.slice().sort();

for(var i=0;i<places.length;i++)
{
    console.log(new_places[i]);
}


console.log("\n***********\n");
console.log("\noriginal array\n"); 

for(var i=0;i<places.length;i++)
{
    console.log(places[i]);
}

console.log("\n***********\n");
console.log("\nin reverse alphabetical order\n");

var reverse_order=places.slice().sort().reverse();

for(var i=0;i<places.length;i++)
{
    console.log(reverse_order[i]);
}

console.log("\n***********\n");
console.log("\n original array\n");

for(var i=0;i<places.length;i++)
{
    console.log(places[i]);
}

console.log("\n***********\n");
console.log("\n Reversed array\n");

var reversed=places.reverse();

for(var i=0;i<places.length;i++)
{
    console.log(reversed[i]);
}

console.log("\n***********\n");
console.log("\n original array which is now changed\n");

for(var i=0;i<places.length;i++)
{
    console.log(places[i]);
}

console.log("\n***********\n");
console.log("\n reversing the reversed one, once again\n");

places.reverse();

for(var i=0;i<places.length;i++)
{
    console.log(places[i]);
}

console.log("\n***********\n");
console.log("\n showing that original has been changed\n");


for(var i=0;i<places.length;i++)
{
    console.log(places[i]);
}

console.log("\n***********\n");
console.log("\n sorting the original one again\n");

places.sort();

for(var i=0;i<places.length;i++)
{
    console.log(places[i]);
}

console.log("\n***********\n");
console.log("\n showing the original one\n");

for(var i=0;i<places.length;i++)
{
    console.log(places[i]);
}

console.log("\n***********\n");
console.log("\n reversing the original one\n");

places.reverse();

for(var i=0;i<places.length;i++)
{
    console.log(places[i]);
}

console.log("\n***********\n");
console.log("\n showing the array after being sorted\n");

for(var i=0;i<places.length;i++)
{
    console.log(places[i]);
}

