import wordBank from "./wordle-bank.txt";

export const gridDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
    
];

export const generateWords = async() => {
   let wordSet; 
   let todaysWord;
   await fetch(wordBank)
   .then((response) =>  response.text())
   .then((result) =>{
    const wordArray = result.split("\n") ;
    todaysWord = wordArray[Math.floor(Math.random() * wordArray.length)]
    wordSet = new Set(wordArray);
   });
return{wordSet, todaysWord};

};