const current_users=['Shane','Watson','David','Peter','Aslam'];

const new_users=['Shane','Watson','Taimoor','Ali','Asad'];

for(var j=0;j<5;j++)
{
    if(new_users[j]==current_users[j])
    {
        console.log("You need to add more users\n");
    }
    else
    {
        console.log('userName is available\n');
    }
}