import{test, expect} from '@playwright/test';


test('Get By Role Locator', async ({page}) =>{
 
   await page.goto("https://playwrightlab.github.io/");

   await page.setViewportSize({width:1920 ,height:1080});
     
   const login =await page.getByRole('link',{name: 'Login',exact : true});

   await login.click();

   await page.goBack();

await page.getByRole('link',{name : 'nav-logo' , exact :true}).click();

})