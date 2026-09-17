import { Page, Locator, expect } from "@playwright/test";
import config from "../../config/config.json"with {type: 'json'}
import { characterCodeToRegularExpressionFlag } from "typescript/unstable/ast";

export class WebCommons {

    page: Page;

    constructor(page: Page) {

        this.page = page;
    }

    // Reuasble method for launch the appication
    async launchTheApplication() {

        await this.page.goto(config.web.url);
        await expect(this.page).toHaveTitle(config.web.title)

    }
    // Generate a web Element from the Locators
    async element(locator: string): Promise<Locator> {
        return this.page.locator(locator);
    }

    // Scroll to the Element 

    async scrollToElement(locator: string): Promise<void> {
        const element = await this.element(locator);
        await element.scrollIntoViewIfNeeded();
    }
    // ==========================================ClicK action===================================================================================
    //  click on the Web Element

    async clickElement(locator: string): Promise<void> {
        const element = await this.element(locator);
        await element.click();
    }
    //  Double click
    async doubleClick(locator: string): Promise<void> {
        const element = await this.element(locator)
        await element.dblclick();
    }
    //    Right Click

    async rightClick(locator: string): Promise<void> {
        const element = await this.element(locator);
        await element.click({ button: 'right' });
    }

    async mouseHover(locator: string): Promise<void> {
        const element = await this.element(locator);
        await element.hover();
    }
    //  =================================================================================================================================

    // type text on text Element 

    async enterText(locator: string, text: string): Promise<void> {
        const element = await this.element(locator);
        await element.clear();
        await element.fill(text)
    }

    //  Method for Drop Down
    async selectDropdownOption(locator: string, optionValue: string): Promise<void> {
        const element = await this.element(locator);
        await element.selectOption(optionValue);
    }

    //  Get the text value from the web Element

    async getText(locator: string): Promise<string | null> {
        const element = await this.element(locator);
        return await element.textContent();
    }

    // Get Attribute vaule
    async getAttribute(locator: string, attributeValue: string): Promise<string | null> {
        const element = await this.element(locator);
        return await element.getAttribute(attributeValue);
    }
    //  select the option from the checkbox
    async selectCheckbox(locator: string, status: boolean): Promise<void> {
        const element = await this.element(locator);
        const isChecked = await element.isChecked();

        if (isChecked !== status) {
            await element.check();
        }
    }

    //  to verify whether an element is displayed
    async isElementDisplayed(locator: string): Promise<boolean> {
        const element = await this.element(locator);
        return await element.isVisible();
    }

    // to verify whether an element is enabled
    async isElementEnabled(locator: string): Promise<boolean> {
        const element = await this.element(locator);
        return await element.isEnabled();
    }

    // to upload the file
    async uploadFile(locator: string, filePath: string): Promise<void> {
        const element = await this.element(locator);
        await element.setInputFiles(filePath);
    }

    // Screen shot Method 
    async takeScreenshot(filePath: string): Promise<void> {
        await this.page.screenshot({ path: filePath });
    }
    //   Screen shot for full page
    async takeFullPageScreenshot(filePath: string, fullPage: boolean): Promise<void> {

        await this.page.screenshot({ path: filePath, fullPage: true });
    }

    //   launch the application in new tab
    async launchInNewTab(url: string): Promise<void> {
        const newPage = await this.page.context().newPage();
        await newPage.goto(url);
    }

    // handle alert popups
    async handleAlert(action: string | 'dismiss', promptText?: string): Promise<void> {
        this.page.on('dialog', async (dialog) => {
            if (action.toLowerCase() === 'accept') {
                await dialog.accept(promptText);
            } else {
                await dialog.dismiss();
            }
        });
    }

}