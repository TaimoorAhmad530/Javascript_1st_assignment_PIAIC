const userNames=['Admin','Eric','Taimoor','Aslam','Sajid'];

for(var i=0;i<userNames.length;i++)
{
    if(userNames[i]=='Admin')
    {
        console.log("Hello "+ userNames[i] +" !Would you like to see some reports\n");
    }
    else
    {
        console.log("Hello "+userNames[i]," Thank yu for logging in\n");
    }
}