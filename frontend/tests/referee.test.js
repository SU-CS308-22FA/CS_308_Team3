const { Builder, By, Key } = require("selenium-webdriver");
require("chromedriver");

async function scoreSuccess() {
    // Login Phase
    let driver = new Builder().forBrowser("chrome").build();

    // Open the login page
    await driver.get("http://localhost:3000/profile");

    await driver.findElement(By.id("logintoggle")).click();

    // Find the username and password input fields
    await driver.findElement(By.id("Email")).sendKeys("tff1@gmail.com");
    await driver.findElement(By.id("Password")).sendKeys("123123123");

    await driver.findElement(By.id("login_button")).click();

    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Match Adding Phase
    await driver.get(
        "http://localhost:3000/scores"
    );
}

scoreSuccess();