
//this program was used in program 41
var magicians=['magician1','magician2','magician3'];

show_magicians.apply(this,magicians);

function show_magicians()
{
    for(var i=0;i<magicians.length;i++)
    {
        console.log(magicians[i]);
    }
}



function make_great()
{
    for(var i=0;i<magicians.length;i++)
    {
      console.log(magicians[i]="The great "+magicians[i]);
    }
    
}


make_great();
show_magicians();//showing that original array has been changed
