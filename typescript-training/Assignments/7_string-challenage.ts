let sentance: string ="Java programming is fun and challenging";

let wordsSplitBySpace : string[] = sentance.split(" ");

let totalWordCount: number = wordsSplitBySpace.length;

console.log (`Teotal number of words in the paragraph is: ${totalWordCount}`)


// reverse order

let reverseWord : string =[...wordsSplitBySpace].reverse().join(" ")

console.log(reverseWord)


// convert first letter as Capital Letter:

let sentence = "java programming is fun and challenging";

let words = sentence.split(" ");

let result = "";

for (let i = 0; i < words.length; i++) {

    let word = words[i];

    let first = word![0]!.toUpperCase();   // first letter
    let rest = word!.substring(1);        // remaining letters

    result = result + first + rest + " ";
}

console.log(result);
 console.log("=================================================================================")
//=====================================Assignment 2 ======================================

let paragraph : string = "Java is a popular programming language. Java is used for web development,"+
" mobile applications, and more.";
let count = 0;
let spiltBySpace : string[] = paragraph.split(" ");

for(let i : number = 0 ; i<=spiltBySpace.length-1 ; i++ ){
 
  //  console.log(spiltBySpace[i])

  if (spiltBySpace[i]?.toLowerCase() ==="java"){

    count++
    console.log("Java index value is ",[i])
  }

}

console.log("Total number of 'Java' word is :", count)
console.log("=================================================================================")
//============================================Assignment 3 ==========================================
let rows: number = 5;
// control the rows
for (let i = 1; i <= rows; i++) {

    let printLine: string = "";

    // control the  spaces
    for (let j = 1; j <= rows - i; j++) {
        printLine += " ";
    }

    // print stars
    for (let m = 1; m <= i; m++) {
        printLine += "*";
    }

    console.log(printLine);

   
}
 console.log("=================================================================================")