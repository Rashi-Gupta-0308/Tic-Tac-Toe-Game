let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".new");
let congo = document.querySelector(".msg");
let winnermsg = document.querySelector(".winner");

let turn0 = true;

const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turn0 = true;
    enabledboxes();
    congo.classList.add("hide");
}

resetbtn.addEventListener("click", resetGame)
newbtn.addEventListener("click", resetGame)


boxes.forEach ((box) => {
    box.addEventListener("click" , () => {
        if (turn0)
        {
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
}) 

const disabledboxes = () => {
    for(let box of boxes)
    {
        box.disabled = true;
    }
}


const enabledboxes = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (w) => {
    winnermsg.innerText = "Congratulations! Winner is " + w;
    congo.classList.remove("hide");
}


const checkWinner = () => {
    for(let wins of win)
    {
        let val1 = boxes[wins[0]].innerText;
        let val2 = boxes[wins[1]].innerText;
        let val3 = boxes[wins[2]].innerText;

        if(val1!="" && val2!="" && val3!="")
        {
            if(val1 === val2 && val2=== val3)
            {
                showWinner(val1);
                disabledboxes();
            }
        }
    }
}