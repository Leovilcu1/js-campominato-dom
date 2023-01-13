
const myButton = document.querySelector("button")
const select = document.getElementById("my-select");
const cellsNumber = 100;
const bombsNumber = 16;


myButton.addEventListener("click",
function(){
    const bombs =[];
    console.log(bombs);
    
    let myGrid = document.getElementById("grid-container");
    myGrid.innerHTML="";
    for( let i = 1; i <= cellsNumber; i++){
        // const newRandomNumber = i;
        
        const cell = createNewCell(i);
        myGrid.append(cell);

        cell.addEventListener("click",
        function (){
        // console.log(num,typeof num);
        // console.log(this.innerText,typeof this.innerText);  
        this.classList.add("clicked");

    if(document.querySelectorAll(".cell.clicked").length <cellsNumber-bombsNumber
    &&
     document.querySelectorAll(".cell.bomb").length == 0
     ){
            const cellsNumber = parseInt(this.innerText);
        

        if(bombs.includes(parseInt(this.innerText)) ){
            this.classList.add("bomb");
            const clickedCells = document.querySelectorAll(".cell.clicked").length;
            alert("hai perso! hai totalizzato:" + clickedCells + "punti");
        }
        else{
            this.classList.add("clicked");
            const clickedCells = document.querySelectorAll(".cell.clicked").length;

            if(cellsNumber - bombsNumber == bombsNumber){
            alert("hai vinto! hai totalizzato:" + clickedCells + "punti");
            }   
        }
        }
    }
    );
    }
    for(let i = 1; i <= bombsNumber; i++){
        const newBomb = getUniqueRandomNumber(bombs,1, 100);
        bombs.push(newBomb);
        // console.log(newBomb);
    }
}
)
 

 





function createNewCell(content){

    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerHTML = content;  
    return cell;
    
}
// getRandomNumber
function getRandomNumber (min, max){
    return Math.floor(Math.random()*(max-min+1))-min;
}
// getUnique RandomNumber
function getUniqueRandomNumber(generateNumber,min, max){
    let randomNumeri = getRandomNumber(min,max);
    while(generateNumber.includes(randomNumeri)){
    randomNumeri = getRandomNumber(min,max);
     }
   
    console.log(randomNumeri);

    return randomNumeri;
}
