import{test,expect} from '@playwright/test'
import { WebCommons } from '../../commons/ui/web-commons.js';


test('example',async({page}) =>{

    let web = new WebCommons(page);

    await web.launchTheApplication();


})