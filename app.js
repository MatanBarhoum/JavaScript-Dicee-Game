var images = [ 
    { 
    url: "images/dice1.png",
    value: 1 }, 
    {
        url: "images/dice2.png",
        value: 2
    },
    {
        url: "images/dice3.png",
        value: 3
    },
    {
        url: "images/dice4.png",
        value: 4
    },
    {
        url: "images/dice5.png",
        value: 5
    },
    {
        url: "images/dice6.png",
        value: 6
    }
];
var dices = document.querySelectorAll(".dice");
 // Setting the starting page every time
dices.forEach( (item) => {
    item.getElementsByTagName("img")[0].setAttribute("src", "images/dice1.png");
})

const getRandomImage = () => {
    let index = Math.floor(Math.random() * images.length); 
    return images[index];
}

const Play = () => {
    let player1Cube = getRandomImage();
    let player2Cube = getRandomImage();
    
    dices[0].getElementsByTagName("img")[0].setAttribute("src", player1Cube.url);
    dices[1].getElementsByTagName("img")[0].setAttribute("src", player2Cube.url);

    getWinner(player1Cube, player2Cube);
}

const getWinner = (player1Cube, player2Cube) => {
    if (player1Cube.value > player2Cube.value)
    {
        let lblwinner = document.getElementById("lbl-winner").innerHTML = "Player 1 Won!";
    }
    else if (player1Cube.value == player2Cube.value) 
    {
        let lblwinner = document.getElementById("lbl-winner").innerHTML = "Draw!";
    }
    else 
    {
        let lblwinner = document.getElementById("lbl-winner").innerHTML = "Player 2 Won!";
    }
}