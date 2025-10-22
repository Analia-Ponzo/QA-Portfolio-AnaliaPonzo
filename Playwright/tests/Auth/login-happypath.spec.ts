import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

test.describe("Test suite", async() => {

    test('test para ver steps - User go to page',async({ page })=>{

    await test.step('User go to URL', async() => {
      await page.goto('https://www.saucedemo.com/v1/'); 
    })

    await test.step ('User see the page', async() => {
      await expect(page).toHaveTitle("Swag Labs");
    })

  })

  test ('User login the page', async({page}) => {
    await test.step('Then the user login the page',async() => {
      await page.goto('https://www.saucedemo.com/v1/'); 
      await page.getByPlaceholder("Username").fill("standard_user");
      await page.getByPlaceholder("Password").fill("secret_sauce");
      await page.click("//input[@id='login-button']");
      })

    await test.step ("The user see the Products page", async() => {
      //await page.getByText("Products").isVisible();
      await expect(page.locator("//div[@class='product_label']")).toBeVisible();
      await page.screenshot({path: "./captures/" + Date.now ()+ "screenshot.jpg"});

    })

  })

});


