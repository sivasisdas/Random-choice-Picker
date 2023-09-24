const userInput = document.getElementById("inp");
const btn = document.querySelector('button');
const result = document.querySelector('h4');

btn.addEventListener("click", randomChoice);

function randomChoice(){
    let inpStr = userInput.value;
    let arr = inpStr.split(",").map((key)=>key.trim());
    console.log(arr);
    let arrLength = arr.length;
    console.log(arrLength);
    if(arr.length === 0 || (arr.length === 1 && arr[0] === "")){
        result.innerText = "Please enter Choices";
    }

    let randomIndex = Math.floor(Math.random()*(arrLength));
    console.log(randomIndex);
    result.innerText= `Random Choice: ${arr[randomIndex]}`;
}


