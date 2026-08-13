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

