let name="Hello Eric! Would you like to learn some javascript today?";
//for upper case
console.log(name.toUpperCase());

//for lower case

console.log(name.toLowerCase());

//for title case
function titleCase(name)
{
    name=name.toLowerCase().split(' ');
    for(var t=0;t<name.length;t++)
    {
        name[t]=name[t].charAt(0).toUpperCase()+name[t].slice(1);
    }
    return name.join(' ');
}
console.log(titleCase(name));