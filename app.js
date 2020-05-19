var blocks = document.querySelectorAll("td");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var isplayer1 = true;
var winner = null;
var message = document.querySelector("#message");
var gameDiv = document.querySelector("#gameDiv");

for(var i=0; i<blocks.length; i++)
{
    blocks[i].addEventListener("click", game, {once:true}); //Allowed to be clicked once
}

//ALL GAME LOGIC
function game()
{
    if(isplayer1)
    {
        this.innerHTML = "X";
        //the own property is to assign box to player
        this.own = "x";
        player1.classList.remove("turn");
        player2.classList.add("turn");
    }
    else
    {
        this.innerHTML = "O";
        this.own = "o";
        player2.classList.remove("turn");
        player1.classList.add("turn");
    }
    isplayer1 = !isplayer1;

    //Check for the Winner
    if(blocks[0].own!=null && blocks[0].own == blocks[1].own && blocks[1].own == blocks[2].own)
        winner = blocks[0].own;
    if(blocks[0].own!=null && blocks[0].own == blocks[3].own && blocks[3].own == blocks[6].own)
        winner = blocks[0].own;
    if(blocks[0].own!=null && blocks[0].own == blocks[4].own && blocks[4].own == blocks[8].own)
        winner = blocks[0].own;
    if(blocks[1].own!=null && blocks[1].own == blocks[4].own && blocks[4].own == blocks[7].own)
        winner = blocks[1].own;
    if(blocks[2].own!=null && blocks[2].own == blocks[5].own && blocks[5].own == blocks[8].own)
        winner = blocks[2].own;
    if(blocks[2].own!=null && blocks[2].own == blocks[4].own && blocks[4].own == blocks[6].own)
        winner = blocks[2].own;
    if(blocks[3].own!=null && blocks[3].own == blocks[4].own && blocks[4].own == blocks[5].own)
        winner = blocks[3].own;
    if(blocks[6].own!=null && blocks[6].own == blocks[7].own && blocks[7].own == blocks[8].own)
        winner = blocks[6].own;

    if(winner!=null)
    {
        for(var i=0; i<blocks.length; i++)
            blocks[i].removeEventListener("click",game);
        document.querySelector("body").style.backgroundColor = "cadetblue";
        player1.classList.add("spanWin");
        player2.classList.add("spanWin");
        if(winner=="x")
            gameDiv.innerHTML = "<h1>The winner is<br>Player 1</h1><button id='resetBtn' onClick='window.location.reload()'>Play Again</button>";
        else
            gameDiv.innerHTML = "<h1>The winner is<br>Player 2</h1><button id='resetBtn' onClick='window.location.reload()'>Play Again</button>";
    }
    else
    {
        var pari = true;
        for(var i=0; i<blocks.length; i++)
            pari = pari && blocks[i].own!=null;
        if(pari)
        {
            document.querySelector("body").style.backgroundColor = "cadetblue";
            gameDiv.innerHTML = "<h1>DRAW!</h1><button id='resetBtn' onClick='window.location.reload()'>Play Again</button>";

        }3
    }
}