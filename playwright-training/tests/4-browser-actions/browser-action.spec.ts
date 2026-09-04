import{test,expect,chromium} from '@playwright/test';

test('Browser Actions',async({page})=>{

    // 1. Launch the Edge Browser with headless mode disabled

    const browserEngine = await chromium.launch({channel:'msedge',headless:false});

    // 2.Create a new browser constext within brower engine (new incognito window)

    const browserContext = await browserEngine.newContext();

    await browserContext.clearCookies();

    // 3. Create a new page within the browser context  
    const page1 = await browserContext.newPage();

    // 4. Maximize the browser window
    await page1.setViewportSize({width :1920 , height:1020});

    // 5. Navigate to the URL
    await page1.goto('https://www.google.com/');

    // await expect(page).toHaveTitle("Goolge");

    await page1.goto('https://www.amazon.in/')

    await page1.reload();

    await page1.goBack();

    const page2 = await browserContext.newPage();

    await page2.goto('https://www.flipkart.com/');

    await page2.close();

    await page1.close();

    await browserContext.close();

    await browserEngine.close();

});