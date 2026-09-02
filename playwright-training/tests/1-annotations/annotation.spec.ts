import {test , expect } from '@playwright/test';

test.describe("My first test suite" , async () => {
test ("First test" , async ({page}) =>{
    console.log ("My name is manimozhiyan");
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})

test("Second test" , async ({page}) =>{
    console.log ("My name is Jency Shelrin mary");
    await page.goto("https://www.amazon.in/");
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
})

test("Third test" , async ({page}) =>{
    console.log ("My name is Krisha shree");
    await page.goto("https://www.flipkart.com/");
    await expect(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
});

});

test.describe("My second test suite" , async () => {
test("Fourth test" , async ({page}) =>{
    console.log ("My name is Anbu");
    await page.goto("https://www.snapdeal.com/");
    await expect(page).toHaveTitle("Online shopping for Men, Women & Kids Fashion, Home Decor, lifestyle & More");
})

test("Fifth test" , async ({page}) =>{
    console.log ("My name is Bharath");
    await page.goto("https://www.firstcry.com/");
    await expect(page).toHaveTitle("Baby Products Online India: Newborn Baby Products & Kids Online Shopping at FirstCry.com");    

});

test("Sixth test" , async ({page}) =>{
    console.log ("My name is Sakthi");
    await page.goto("https://www.tatacliq.com/");
    await expect(page).toHaveTitle("Online Fashion & Lifestyle Shopping for Women, Men & Kids in India - Tata CLiQ");
});

});