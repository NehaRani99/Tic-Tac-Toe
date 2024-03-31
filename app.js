let boxs=document.querySelectorAll('.box');
let restbtn=document.querySelector('#reset-button');
let msgcontainer=document.querySelector('.msg-container');
let newBtn=document.querySelector('#new-btn');
let msg=document.querySelector('.msg');

let turnO=true;//player X and player o
const winPattrens=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

]
boxs.forEach((box) =>{
    box.addEventListener('click', ()=>{
        console.log('click on the button');
        if(turnO){
            box.innerText='O';
            turnO=false;


        }else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled='true';
        cheacWinner();
    });
});
const disableboxes=()=>{
    for(let box of boxs){
       box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxs){
       box.disabled=false;
       box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove('hide');
    disableboxes()
}
const cheacWinner = () => {
    for(let pattern of winPattrens){
            let pos1val=boxs[pattern[0]].innerText;
            let pos2val=boxs[pattern[1]].innerText;
            let pos3val=boxs[pattern[2]].innerText;

            if(pos1val !="" && pos2val !="" && pos3val !=""){
                if(pos1val === pos2val && pos2val === pos3val){
                   console.log('winner',pos1val)

                    showWinner(pos1val);
                }
            }

    }
};
const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add('hide');
}
newBtn.addEventListener('click',resetgame);
restbtn.addEventListener('click',resetgame);