import {test,expect} from '@playwright/test';


test("First test" ,{tag: '@smoke'} ,async ({page}) =>{
    console.log ("My name is manimozhiyan");

})  
test("Second test" ,{tag: '@regression'} ,async ({page}) =>{
    console.log ("My name is mani");
})  

test("Third test" ,{tag: '@smoke'} ,async ({page}) =>{
    console.log ("My name is mozhiyan");
})