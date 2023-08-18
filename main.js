// vanilla,vanilla,vanilla,strawberry,coffee,coffee

let userPrompt = window.prompt("Please enter your favorite Froyo flavors seperated by commas.")

const promptArr = userPrompt.split(",")
const flavorObj = {}
for(let i = 0; i < promptArr.length; i++){
    let key = promptArr[i]
    if(flavorObj[key] === undefined){
        flavorObj[key] = 0;
    }
    flavorObj[key]++
}
console.log(flavorObj)
