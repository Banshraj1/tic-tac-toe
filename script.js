let boxes=document.querySelectorAll(".btn");
let resetbtn=document.querySelector("#reset");
let winner=document.querySelector("#winner");
let turn=document.querySelector("#turn");
let turnX=true;
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]
// label:Start;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("press");
        if(turnX){
            box.innerHTML="X";
            turn.innerHTML="It's O's turn.";
            turnX=false;
        }else{
            box.innerHTML="O";
            turn.innerHTML="It's X's turn."
            turnX=true;
        }
        box.disabled="true";
         checkwin();
    }
    )
})
const checkwin=()=>{
    for(let set of win){
       let postn1=boxes[set[0]].innerHTML;
       let postn2=boxes[set[1]].innerHTML;
       let postn3=boxes[set[2]].innerHTML;
    
    if(postn1!=""&&postn2!=""&&postn3!=""){
        if(postn1===postn2&&postn2===postn3){
            winner.innerHTML=postn1+" is winner!";
            resetbtn.innerHTML="Restart"
            for(box of boxes){
                box.disabled=true;
            }
        }
    }
}
};

function resetall(){
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerHTML="";
    })
    winner.innerHTML="";
    resetbtn.innerHTML="Reset";
}
