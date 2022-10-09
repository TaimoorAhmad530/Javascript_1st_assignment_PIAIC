const Animals=['goat','cow','donkey'];

//printing names of each one

for(var i=0;i<Animals.length;i++)
{
    console.log(Animals[i]);
}
console.log("\n");

for(var i=0;i<Animals.length;i++)
{
    if(Animals[i]=='goat')
    {
        console.log(Animals[i]+" would be a great pet ");
    }
    else if(Animals[i]=='cow')
    {
        console.log(Animals[i]+" would be a great source of milk ");
    }
    else if(Animals[i]=='donkey')
    {
        console.log(Animals[i]+" would be a great pet,and would be faithful ");
    }
    
}
console.log("Any of these would be faithful\n");
