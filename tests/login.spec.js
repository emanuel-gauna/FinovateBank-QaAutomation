
const { Builder , By } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const edge = require("selenium-webdriver/edge");

describe("Login", ()=>{
    it("login con contraseña y cierre de sesión", async ()=>{
   let driver = new webdriver.Builder().forBrowser('chrome').setFirefoxOptions().setEdgeOptions().build();
   await driver.get('https://finovate-bank.onrender.com/web/pages/login.html')
   await driver.manage().window().maximize()
    //ingresar usuario y password
    await driver.findElement(By.id("emailLogin")).sendKeys("lemagauna@gmail.com")
    await driver.sleep(1000)
    await driver.findElement(By.id('passwordLogin')).sendKeys('Loquesea2023')
    //hacer click en el botón de ingresar
    await driver.findElement(By.className('btn--login')).click();
   await driver.sleep(9000) 
   
   await driver.findElement(By.className('Btn--logout ms-1 ms-md-0')).click()
   await driver.sleep(5000);
   await driver.quit(); 
});
});   