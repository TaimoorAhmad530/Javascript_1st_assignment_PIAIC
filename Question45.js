function car_function(manufacturer,model_name,optionals={})
{
    var obj={
        color:'red',
        engine_formation:'v8'
    };

    for(var i in optionals)
    {
        obj[`${optionals[i]}`]=optionals[i];
    }

    return obj;
}

var vezel=car_function("Honda","Vezel",{
    "year":1991,
    "color":"black",
    "headlights":"flashlights"
});

console.log(vezel);