let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let turn0=true;
let gameContainer=document.querySelector(".container");
let newGameBtn=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msgContainer");   
let msg=document.querySelector("#msg");
gameContainer.classList.remove("hide");

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    gameContainer.classList.remove("hide");
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

boxes.forEach((box)=>{
    // console.log("box was clicked");
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;//for disabling after clicking
        checkWinner();
    });
});

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, your winner is ${winner}`;
    msgContainer.classList.remove("hide");
    gameContainer.classList.add("hide");   
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos0=boxes[pattern[0]].innerText;
        let pos1=boxes[pattern[1]].innerText;
        let pos2=boxes[pattern[2]].innerText;
        if(pos0!="" && pos1!= "" && pos2!=""){
            if(pos0===pos1&&pos1===pos2){
                // console.log("Winner is ",pos0);
                showWinner(pos0);
            }
        }
    }
}

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);