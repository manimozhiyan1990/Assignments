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