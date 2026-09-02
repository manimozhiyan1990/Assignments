import {test,expect} from '@playwright/test';

test.only("Test case 1" , async ({page}) =>{
    console.log("This is my first test case");
});

test.fail("Test case 2" , async ({page}) =>{ 
    console.log("This is my second test case");
    
});
test.fixme("Test case 3" , async ({page}) =>{
    console.log("This is my third test case"); 
});
