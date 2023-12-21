const { Builder, By } = require("selenium-webdriver");
const  webdriver = require("selenium-webdriver");
const edge = require("selenium-webdriver/edge");
const firefox = require("selenium-webdriver/firefox");

describe( "Register", () =>{
    it("Registro de nuevo usuario y cierre de sesión" , async ()=>{
        let driver = new webdriver.Builder().forBrowser("chrome").setEdgeOptions().setFirefoxOptions().build();
        await driver.sleep(2000)
        await driver.get("https://finovate-bank.onrender.com/web/pages/login.html")
        await driver.manage().window().fullscreen()
        await driver.sleep(2000)
        await driver.findElement(By.className("ball-select")).click()
        await driver.findElement(By.id("firstName")).sendKeys("usuario")
        await driver.sleep(2000)
        await driver.findElement(By.id("lastName")).sendKeys("secreto")
        await driver.sleep(2000)
        await driver.findElement(By.id("emailRegister")).sendKeys("User26@mail.com")
        await driver.sleep(2000)
        await driver.findElement(By.id("passwordRegister")).sendKeys("Secreto2025")
        await driver.sleep(2000)
        await driver.findElement(By.xpath('//*[@id="app"]/div/div/div/div/div/div/div/div/div[2]/div/div/button')).click()
        await driver.manage().window().maximize()
        await driver.sleep(9000)
        await driver.findElement(By.className('Btn--logout ms-1 ms-md-0')).click()
        await driver.sleep(5000);
        await driver.quit(); 
    })
}) 