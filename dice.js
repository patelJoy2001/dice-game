var random1 = Math.floor(Math.random()*6)+1;

var randomimg1 = "diceImages/dice"+random1+".png";

var imgsrc1 = document.querySelectorAll("img")[0];
imgsrc1.setAttribute("src",randomimg1);

// for 2nd img

var random2 = Math.floor(Math.random()*6)+1;

var randomimg2 = "diceImages/dice"+random2+".png";

var imgsrc2 = document.querySelectorAll("img")[1];
imgsrc2.setAttribute("src",randomimg2);

// code

if(random1 > random2)
{
    document.querySelector("h1").innerHTML = "PLAYER1 JEET GAYAA...."
}

else if(random2>random1)
{
    document.querySelector("h1").innerHTML = "PLAYER2 JEET GAYAA...."
}

else
{
    document.querySelector("h1").innerHTML = "chalo firse...."
}




