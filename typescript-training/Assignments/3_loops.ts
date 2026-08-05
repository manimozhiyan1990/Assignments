 const studentName : string[] = ['Manimozhiyan','Jency Sherlin Mary','Krisha Shree'];

let studentMarks: number[] =[75,80,82];

const updatedMarks : number[] = [];

let total : number = 0;

for(let i = 0 ; i<studentMarks.length;i++){

   updatedMarks[i] = studentMarks[i]!+ 10;
   total += updatedMarks[i]!;

 console.log(`${studentName[i]}:${updatedMarks[i]}`)

}

const averageMarks : number = total/studentMarks.length

console.log("Average marks of the Student :"+ averageMarks)