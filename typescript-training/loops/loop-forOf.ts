
// for-of


const displayDetails ={

    name :"manimozhiyan",
    age : 35,
    address :{
        houseNo : 23,
        city : "chennai"
    }
}

// for (const getDetails in displayDetails){

//     console.log(getDetails + " : " + displayDetails[getDetails as keyof typeof displayDetails])
// }

// for (const getAddress in displayDetails.address){

//     console.log(getAddress + " : " + displayDetails.address[getAddress as keyof typeof displayDetails.address])
// }   
// for (const getName of Object.keys(displayDetails)){

//     console.log(getName + " : " + displayDetails[getName as keyof typeof displayDetails])
// }
// for (const getAddress of Object.keys(displayDetails.address)){  
//     console.log(getAddress + " : " + displayDetails.address[getAddress as keyof typeof displayDetails.address])
// }

// for (const [key, value] of Object.entries(displayDetails)){
//     console.log(key + " : " + value)
// }

const user ={
    a : 1,
    b : 2,
    c : 3
}

for (const[key,value] of Object.entries(user)){
    console.log(key,value)
}