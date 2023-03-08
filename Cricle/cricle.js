const pi = 3.14;

function cricleArea (radius){
    var cricleArea = pi * radius * radius;
    console.log("Dairenin alanı: "+cricleArea);
}

function circleCircumference (radius){
    var circleCircumference = 2 * pi * radius;
    console.log("Dairenin Çevresi = " + circleCircumference);
}

module.exports={
    cricleArea,
    circleCircumference
}