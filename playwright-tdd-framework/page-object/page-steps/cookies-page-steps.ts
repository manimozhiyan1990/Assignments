import { Page } from "@playwright/test";
import cookiesPage from '../page-elements//cookies-page-elements.json' with {type: 'json'};
import { WebCommons } from "../../commons/ui/web-commons.ts";


export class CookiesSteps {

    page: Page;
    web: WebCommons;

    constructor(page: Page) {
        this.page = page;

        this.web = new WebCommons(page)
    }

    async verifyCookiesPopUpDisplayed() {
        await this.web.isElementDisplayed(cookiesPage.cookiesPageHeader);

    }

    async verifyCookiesPopupContent(expectedValue: string) {

        await this.web.isElementDisplayed(cookiesPage.cookiesContent);

        const actualValue = this.web.getText(cookiesPage.cookiesContent);
        console.log(actualValue);

    }

}