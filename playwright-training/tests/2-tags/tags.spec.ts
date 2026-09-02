import {test,expect} from '@playwright/test';

test("Test case 1" ,{tag: '@smoke'} ,async ({page}) =>{
    console.log("This is my first test case");
});

test("Test case 2" ,{tag : '@regression'} ,async ({page}) =>{ 
    console.log("This is my second test case");
    
});
test("Test case 3" ,{tag : '@smoke'} ,async ({page}) =>{
    console.log("This is my third test case"); 
});

test("Test case 4" ,{tag : '@regression'} , async ({page}) =>{ 

    console.log("This is my fourth test case");
});