// const puppeteer = require("puppeteer");
const Page = require("./helper/page");

describe("header function test", () => {
  let page;
  beforeEach(async () => {
    // browser = await puppeteer.launch({
    //   headless: false,
    // });
    // page = await browser.newPage();
    page = await Page.build();
    await page.goto("http://localhost:3000");
  });
  afterEach(async () => {
    await page.close();
  });

  test("launch a new browser", async () => {
    // const text = await page.$eval("a.brand-logo", (el) => el.innerHTML);
    const text = await page.getContentsOf("a.brand-logo");
    expect(text).toEqual("Blogster");
  });

  test("start auth flow when login is clicked", async () => {
    // console.log(page);
    await page.click(".right a");
    const url = page.url();
    expect(url).toMatch(/accounts\.google\.com/);
  });

  test("show logout button when signed in", async () => {
    await page.login();
    // const text = await page.$eval(
    //   'a[href="/auth/logout"]',
    //   (el) => el.innerHTML
    // );
    const text = await page.getContentsOf('a[href="/auth/logout"');
    expect(text).toEqual("Logout");
  });
});
