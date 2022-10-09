//this is the part of question 41
var magicians=['magician1','magician2','magician3'];

show_magicians.apply(this,magicians);

function show_magicians()
{
    for(var i=0;i<magicians.length;i++)
    {
        console.log(magicians[i]);
    }
}

//this is the part of question 42
function make_great(magicians)
{
    const newMagicians=[show_magicians];

    for(var i=0;i<newMagicians.length;i++)
    {
      newMagicians[i]="the great"+ newMagicians[i];
    }

    return newMagicians;
    
}

let arr=["one","two ","three"];
let newArr=make_great(arr); 