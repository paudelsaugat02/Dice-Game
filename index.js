function func() {
    var randnum1 = Math.floor(Math.random() * 6 + 1);
    var randimg1 = "images/" + "dice" + randnum1 + ".png";
    document.querySelector(".img1").setAttribute("src", randimg1);


    var randnum2 = Math.floor(Math.random() * 6 + 1);
    var randimg2 = "images/" + "dice" + randnum2 + ".png";
    document.querySelector(".img2").setAttribute("src", randimg2);

    if (randnum1 > randnum2) {
        document.querySelector("h2").innerHTML = "<em>😎Player-1 Won!</em>";
    }
    else if (randnum2 > randnum1) {
        document.querySelector("h2").innerHTML = "<em>Player-2 Won!😎</em>";
    }
    else {
        document.querySelector("h2").innerHTML = "<em>Draw😶</em>";
    }

}