// vanilla,vanilla,vanilla,strawberry,coffee,coffee

let userPrompt = window.prompt("Please enter your favorite Froyo flavors seperated by commas.")
function checkFlavors(str){
    const promptArr = str.split(",")
    const flavorObj = {}
    for(let i = 0; i < promptArr.length; i++){
        let key = promptArr[i]
        if(flavorObj[key] === undefined){
            flavorObj[key] = 0;
            // console.log(flavorObj[key])
        }
        flavorObj[key]++
    }
    return flavorObj
}
console.log(checkFlavors(userPrompt))
