let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winchances = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const resetGame = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");

    

}

boxes.forEach( (box) =>{
    box.addEventListener("click", () => {
        if(turnO === true){
            box.innerText="O";
            box.style.color = "#8BAE66";
            turnO = false;
        }
        else{
            box.innerText="X";
            box.style.color = "#092328";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let winner = CheckWinner();
        if(count === 9 && winner === false){
            showDraw();
        }
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (winner) =>{
    msg.innerText=`congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showDraw = () => {
    msg.innerText = "Game was a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const CheckWinner = ()=>{
    for(let pattern of winchances){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != ""&& pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);   
                return true;
            }
        }
    }
    return false;
}


newGame.addEventListener("click" , resetGame)
reset.addEventListener("click" , resetGame)

