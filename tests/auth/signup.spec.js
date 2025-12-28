// import { expect, test } from "@playwright/test"
// import { faker } from "@faker-js/faker"

// test.describe("Registration form", () => {
//     test.beforeEach(async ({ page }) => {
//         await page.goto('/')
//         await page.locator("button.hero-descriptor_btn").click()
//     })

//     test("Все поля пустые", async ({ page }) => {
//         const name = page.locator("#signupName")
//         const lastName = page.locator("#signupLastName")
//         const email = page.locator("#signupEmail")
//         const password = page.locator("#signupPassword")
//         const repeatPassword = page.locator("#signupRepeatPassword")

//         await name.focus()
//         await name.blur()
//         await lastName.focus()
//         await lastName.blur()
//         await email.focus()
//         await email.blur()
//         await password.focus()
//         await password.blur()
//         await repeatPassword.focus()
//         await repeatPassword.blur()

//         await expect(name.locator("..")).toContainText("Name required")
//         await expect(lastName.locator("..")).toContainText("Last name required")
//         await expect(email.locator("..")).toContainText("Email required")
//         await expect(password.locator("..")).toContainText('Password required')
//         await expect(repeatPassword.locator("..")).toContainText("Re-enter password required")

//         await expect(name).toHaveClass(/is-invalid/)
//         await expect(lastName).toHaveClass(/is-invalid/)
//         await expect(email).toHaveClass(/is-invalid/)
//         await expect(password).toHaveClass(/is-invalid/)
//         await expect(repeatPassword).toHaveClass(/is-invalid/)
//     })

//     test("Неверная длинна Name и Last Name", async ({ page }) => {
//         const name = page.locator("#signupName")
//         const lastName = page.locator("#signupLastName")

//         await name.fill("A")
//         await name.blur()

//         await lastName.fill("A")
//         await lastName.blur()

//         await expect(name.locator("..")).toContainText("Name has to be from 2 to 20 characters long")
//         await expect(lastName.locator("..")).toContainText("Last name has to be from 2 to 20 characters long")
        
//         await expect(name).toHaveClass(/is-invalid/)
//         await expect(lastName).toHaveClass(/is-invalid/)
//     })

//     test("Неверные Name LastName Email (Wrong data)", async ({ page }) => {
//         const name = page.locator("#signupName")
//         const lastName = page.locator("#signupLastName")
//         const email = page.locator("#signupEmail")
    
//         await name.fill("###")
//         await name.blur()
    
//         await lastName.fill("###")
//         await lastName.blur()
    
//         await email.fill("###")
//         await email.blur()
//         await expect(name.locator("..")).toContainText("Name is invalid")
//         await expect(lastName.locator("..")).toContainText("Last name is invalid")
//         await expect(email.locator("..")).toContainText("Email is incorrect")
    
//         await expect(name).toHaveClass(/is-invalid/)
//         await expect(lastName).toHaveClass(/is-invalid/)
//         await expect(email).toHaveClass(/is-invalid/)
//     })

//     test("Неверный пароль", async ({ page }) => {
//         const password = page.locator("#signupPassword")

//         await password.fill("Aa1")
//         await password.blur()
    
//         await expect(password.locator("..")).toContainText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter");
//         await expect(password).toHaveClass(/is-invalid/)
//     })

//     test("Re-password неверный и не совпадает", async ({ page }) => {
//         const validPassword = "Quauto123"

//      const password = page.locator("#signupPassword")
//      const repeatPassword = page.locator("#signupRepeatPassword")

//      // Не совпадают
//      await password.fill(validPassword)
//      await repeatPassword.fill("Quauto666")
//      await repeatPassword.blur()

//      await expect(repeatPassword.locator("..")).toContainText("Passwords do not match")
//      await expect(repeatPassword).toHaveClass(/is-invalid/)

//       // Поле пустое
//         await repeatPassword.fill("")
//         await repeatPassword.blur()

//         await expect(repeatPassword.locator("..")).toContainText("Re-enter password required")
//         await expect(repeatPassword).toHaveClass(/is-invalid/)
//     })

//     test("Успешная регистрация", async ({ page }) => {
//         const validPassword = "Qauto123";
//         const email = `aqa-${faker.string.alphanumeric(8)}@gmail.com`;
    
//         await page.locator("#signupName").fill("Test");
//         await page.locator("#signupLastName").fill("User");
//         await page.locator("#signupEmail").fill(email);
//         await page.locator("#signupPassword").fill(validPassword);
//         await page.locator("#signupRepeatPassword").fill(validPassword);
    
//         await page.getByText("Register").click();
    
//         await expect(page.getByText(" My profile ")).toBeVisible();
    
//         await page.getByText(" My profile ").click();
//         await page.getByText("Logout").click();
    
//         await expect(page.getByText("Sign In")).toBeVisible();
    
//         await page.getByText("Sign In").click()
//         await page.locator("#signinEmail").fill(email)
//         await page.locator("#signinPassword").fill(validPassword)
//         await page.getByText("Login").click()
    
//         await expect(page.getByText(" My profile ")).toBeVisible()
//     })
// })