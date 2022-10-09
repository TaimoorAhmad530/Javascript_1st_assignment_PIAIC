const userNames=['Admin','Eric','Taimoor','Aslam','Sajid'];

if(userNames.length!=0)
{
    console.log('list is not empty\n');
}

if(userNames.length==0)
{
    console.log('we need to find more users\n');
}

else
{
    for(var i=0;i<5;i++)
    {
        userNames.pop();
    }
}

console.log(userNames);