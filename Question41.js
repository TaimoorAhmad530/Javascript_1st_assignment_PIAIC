var magicians=['magician1','magician2','magician3'];

show_magicians.apply(this,magicians);

function show_magicians()
{
    for(var i=0;i<magicians.length;i++)
    {
        console.log(magicians[i]);
    }
}