import{test,expect} from '@playwright/test';

test('Wikipedia Data Collection', async({page})=>{

await page.goto('https://en.wikipedia.org/wiki/Playwright_(software)');

const infoBox =  page.locator('table.infobox vevent');
 
const rows  = infoBox.locator('tbody tr');

const count = await rows.count();

console.log(`Total count of the row is :${count}`)

})