import { test, expect } from '@playwright/test';

function generateUniqueRandomNumber(min: number, max: number, usedNumbers) {
  let randomNumber;
  do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (usedNumbers.includes(randomNumber));

  usedNumbers.push(randomNumber);
  return randomNumber;
}

const min = 1;
const max = 100;
const usedNumbers = [];

test('Generate Crapi Traffic', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log("We are on signin page");

  const number = generateUniqueRandomNumber(min, max, usedNumbers);

  await page.getByRole("button", { name: "Signup", exact: true }).click();
  await page.getByPlaceholder("Full Name").fill("mahesh palaskar");
  await page.getByPlaceholder("Email").fill(`maheshp04${number}@gmail.com`);
  await page.getByPlaceholder("Phone No.").fill(`123456${number}`);
  await page.getByPlaceholder("Password", { exact: true }).fill("@Mvp?12345");
  await page.getByPlaceholder("Re-enter Password").fill("@Mvp?12345");
  await page.locator("#basic").getByRole("button", { name: "Signup" }).click();
  await page.getByRole("button", { name: "OK" }).click();

  // login
  await page.waitForTimeout(2000);
  await page.locator("header").getByRole("button", { name: "Login" }).click();
  console.log("We are on login page");
  await page.getByPlaceholder("Email").fill(`maheshp04${number}@gmail.com`);
  await page.getByPlaceholder("Password").fill("@Mvp?12345");
  await page.getByPlaceholder("Password").press("Enter");

  // actual traffic
  await page.waitForTimeout(2000);
  console.log("We are inside crapi");
  await page.getByRole("menuitem", { name: "Dashboard" }).click();

  await page.waitForTimeout(2000);
  await page.getByRole("menuitem", { name: "Shop" }).click();
  await page.getByRole("button", { name: "shopping-cart Buy" }).first().click();
  await page.getByRole("button", { name: "OK" }).click();

  await page.getByRole("menuitem", { name: "Community" }).click();

  // Trying for incident

  await page.getByRole("menuitem", { name: "Community" }).click();

  await page.getByRole("button", { name: "plus New Post" }).click();

  await page.getByPlaceholder("Post Title").fill("<script>alert()</script>");

  await page.getByLabel("Description").fill(`waitfor delay'0`);

  await page.getByRole("button", { name: "Add New Post" }).click();

  await page.waitForTimeout(2000);

  await page.getByRole("button", { name: "OK" }).click();

  await page.getByRole("menuitem", { name: "Community" }).click();

  await page.getByRole("button", { name: "plus New Post" }).click();

  await page.getByPlaceholder("Post Title").fill("test ../../../");

  await page.getByLabel("Description").fill("bob ' or sleep(5)");

  await page.getByRole("button", { name: "Add New Post" }).click();

  await page.waitForTimeout(2000);

  await page.getByRole("button", { name: "OK" }).click();

  // let report = await api.get(`${url}/workshop/api/mechanic/mechanic_report?report_id=2`);

  // console.log(report.data);

  // let newData =
  // {
  //     "id": 3,
  //     "name": "Wheel",
  //     "price": "-1000.00",
  //     "image_url": "images/wheel.svg"
  // }

  // let addStatus = await api.post(`${url}/workshop/api/shop/products`, newData);

  // console.log(addStatus);

  // await page.getByRole('menuitem', { name: 'Shop' }).click();

  // await page.getByRole('button', { name: 'shopping-cart Buy' }).nth(2).click();

  // await page.getByRole('button', { name: 'OK' }).click();

  // let apiResponse = await api.get(`${url}/workshop/api/shop/products`);

  // console.log(apiResponse);

  await page.getByRole("menuitem", { name: "Community" }).click();

  await page.getByRole("button", { name: "plus New Post" }).click();

  await page.getByPlaceholder("Post Title").fill("<script>alert()</script>");

  await page.getByLabel("Description").fill(`waitfor delay'0`);

  await page.getByRole("button", { name: "Add New Post" }).click();

  await page.waitForTimeout(60000);

  await page.getByRole("button", { name: "OK" }).click();

  await page.getByRole("menuitem", { name: "Community" }).click();

  await page.getByRole("button", { name: "plus New Post" }).click();

  await page.getByPlaceholder("Post Title").fill("test ../../../");

  await page.getByLabel("Description").fill("bob ' or sleep(5)");

  await page.getByRole("button", { name: "Add New Post" }).click();

  await page.waitForTimeout(60000);

  await page.getByRole("button", { name: "OK" }).click();

  await page.waitForTimeout(60000);
});

