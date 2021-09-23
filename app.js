const showWhenBillentered = document.querySelector("#showWhenBillentered");
const conTainer=document.querySelector(".container")
const billAmount=document.querySelector("#bill-amount")
const cashGiven=document.querySelector("#cash-given");
const checkButton=document.querySelector("#check");
const message=document.querySelector("#error");
const notesCount=document.querySelectorAll(".returned-note");

const notesValue=["2000","500","100","20","10","5","1"];

checkButton.addEventListener("click",clickHandler);


function clickHandler(){
    hideMessage();
    if(billAmount.value > 0){
        if(cashGiven.value>billAmount.value){
            hideMessage();
            const returnedAmount = cashGiven.value-billAmount.value;
            calculateChange(returnedAmount);


        } else{
            showMessage("Cash Given should be greater than Bill Amount")
        }

    } else {
        showMessage("Invalid Bill Amount")
    }
}

function calculateChange(returnedAmount){
for (let i=0; i<notesValue.length; i++){
    const numberofNotes=Math.trunc(returnedAmount/notesValue[i]
        ); 
        returnedAmount =returnedAmount % notesValue[i];
         notesCount[i].innerText=numberofNotes;

}
}

function hideMessage(){
    message.style.display="none";
}

function showMessage(msg){
    message.style.display="block";
    message.innerText=msg;
}