// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched. 

function pigIt(str){
    arr = str.split(" ")
    pig = []
    for (var i = 0; i < arr.length; i++) { 
        arr[i].match(/^[a-z]+$/i) ? pig.push(arr[i].substring(1) + arr[i][0] + "ay") : pig.push(arr[i])
    }
    return pig.join(' ')
} 

console.log(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
console.log(pigIt('This is my string'),'hisTay siay ymay tringsay')