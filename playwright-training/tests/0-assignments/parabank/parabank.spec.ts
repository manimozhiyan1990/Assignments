import { test, expect } from '@playwright/test';


test.beforeEach('Lanuch the Para Bank Application', async ({ page }) => {

    //launch the application
    await page.goto('https://parabank.parasoft.com/parabank/admin.htm');

    await page.setViewportSize({ width: 1920, height: 1080 });
})

// verify Application Logo
test('Verify the Logo and text value', async ({ page }) => {
    const logo = await page.getByRole('img', { name: 'ParaBank' });  // img[alt="ParaBank"]-- css slector
    expect(logo).toBeVisible();

    const textVaule = await page.getByText('Experience the difference');  //page.locator(.caption)
    expect(textVaule).toHaveText('Experience the difference');

})

//Enter invalid username and Empty passward
test('Enter invalid username and Empty passward and validate the error msg', async ({ page }) => {

    await page.locator('input[name="username"]').fill('manimozhiyan');
    await page.locator("//input[@name='password']").fill('');
    await page.getByRole('button', { name: 'Log In' }).click();

    const errorMsg = await page.getByText('Please enter a username and password.');
    errorMsg.isVisible();
    expect(errorMsg).toHaveText('Please enter a username and password.');
})

//Admin Page Validation
test('Admin page Validation ', async ({ page }) => {

   await adminLinkClick(page);

    const soap = await page.locator('input[value="soap"]');  // value="soap"

    await soap.check();

    await expect(soap).toBeChecked();

    const restJson = await page.locator('input[value="restjson"]');

    await restJson.check();

    await soap.check();

})

// drop Down to webService
test('Drop Down validation', async ({ page }) => {
 await adminLinkClick(page)
  
const loanProvider  = await page.locator('select[id="loanProvider"]')
     await loanProvider.selectOption({label:'Web Service'});
 
       await loanProvider.scrollIntoViewIfNeeded();

    const submitBtn = await page.getByRole('button', { name: 'Submit' });
    await submitBtn.scrollIntoViewIfNeeded();
    await submitBtn.click();

    const sucessMsg = await page.getByText('Settings saved successfully');

    await expect(sucessMsg).toBeVisible();

    await expect(sucessMsg).toHaveText('Settings saved successfully.');
})

// Service Page Validation 

test('Service Book page validation', async ({ page }) => {

 await serviceLinkClick(page);

const bookStoreTable = await page.locator('//span[text()="Bookstore services:"]');

await bookStoreTable.scrollIntoViewIfNeeded();

const tableRows = await page.locator('//span[text()="Bookstore services:"]//following-sibling::table[1]//tbody//tr');

const totalRows = await tableRows.count();

console.log(`total Rows in Book table ${totalRows}`);

const tableColums = await page.locator("//span[text()='Bookstore services:']//following-sibling::table[1]//tbody//tr[1]//td");
const totalColums = await tableColums.count();
console.log(`total Colums in Book table ${totalColums}`);

for(let row :number = 1 ; row<=totalRows ; row++ ){
    for(let colum :number=1;colum<=totalColums ; colum++){

        const cell = await page.locator(`//span[text()="Bookstore services:"]//following-sibling::table[1]//tbody//tr[${row}]//td[${colum}]`)

        const cellText = await cell.textContent();

        console.log(`row ${row} colum ${colum} and value is ${cellText}` )

    }
}

});


async function adminLinkClick (page :any){
     const adminlink =  await page.getByRole('link', { name: 'Admin Page' }).click();
}

async function serviceLinkClick(page : any) {
    const ServiceBooklink = await page.locator('.leftmenu').getByRole('link', { name: 'Services' })
    await ServiceBooklink.click();
}