let boxes=document.querySelectorAll(".box");
//console.log(boxes);
let resetBtn=document.querySelector("#resetBtn");
//console.log(resetBtn);
 let newGameBtn=document.querySelector("#newGameBtn");
// //console.log(newGameBtn);
 let msgContainer=document.querySelector(".msgContainer");
// //console.log(msgContainer);
 let msg=document.querySelector("#msg");
// //console.log(msg);

let turno=true;
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        count++;

        let isWinner=checkWinner();

        if (count==9 && !isWinner){
            gameDraw();
        }
    });
});

const checkWinner=()=>{
    for(let pattern of winPatterns){
       let pos1val=boxes[pattern[0]].innerText;
       let pos2val=boxes[pattern[1]].innerText;
       let pos3val=boxes[pattern[2]].innerText;

       if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val==pos2val && pos2val==pos3val){
           // console.log("winner",pos1val);

            showWinner(pos1val);
            return true;
        }
       }
    }
}; 

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner} !!`;
    msgContainer.classList.remove("hide");
    disablBtn();
};

const gameDraw=()=>{
    msg.innerText="Game is draw";
    msgContainer.classList.remove("hide");
    disablBtn();
};

const disablBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const resetGame=()=>{
    turno=true;
    count=0;
    enableBtn();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
