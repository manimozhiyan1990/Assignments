import{test,expect}from'@playwright/test';

test('locators',async({page})=>{


    await page.goto('https://parabank.parasoft.com/parabank/index.htm')

    await page.getByRole("link" ,{name :"Forgot login info?"}).click();

    await page.goBack();
    
    await page.waitForTimeout(3000); 
     
    await page.getByRole("link" ,{name:"Register"}).click();

    
    
})
