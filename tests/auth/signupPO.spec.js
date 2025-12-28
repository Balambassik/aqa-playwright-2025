import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker";

import { HomePage } from "../../src/pages/HomePage";
import { SignUpPage } from "../../src/pages/SignUpPage";
import { SignInPage } from "../../src/pages/SignInPage";

test.describe("Registration form", () => {
  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page);

    await home.open();
    await home.clickSignUp();
  });

  test("Все поля пустые", async ({ page }) => {
    const signUp = new SignUpPage(page);

    await signUp.blurAllFields();

    await signUp.expectError(signUp.name, "Name required");
    await signUp.expectError(signUp.lastName, "Last name required");
    await signUp.expectError(signUp.email, "Email required");
    await signUp.expectError(signUp.password, "Password required");
    await signUp.expectError(signUp.repeatPassword, "Re-enter password required");
  });

  test("Неверная длинна Name и Last Name", async ({ page }) => {
    const signUp = new SignUpPage(page);

    await signUp.fillName("A");
    await signUp.fillLastName("A");

    await signUp.expectError(signUp.name, "Name has to be from 2 to 20 characters long");
    await signUp.expectError(signUp.lastName, "Last name has to be from 2 to 20 characters long");
  });

  test("Неверные Name LastName Email (Wrong data)", async ({ page }) => {
    const signUp = new SignUpPage(page);

    await signUp.fillName("###");
    await signUp.fillLastName("###");
    await signUp.fillEmail("###");

    await signUp.expectError(signUp.name, "Name is invalid");
    await signUp.expectError(signUp.lastName, "Last name is invalid");
    await signUp.expectError(signUp.email, "Email is incorrect");
  });

  test("Неверный пароль", async ({ page }) => {
    const signUp = new SignUpPage(page);

    await signUp.fillPassword("Aa1");

    await signUp.expectError(
      signUp.password,
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
  });

  test("Re-password неверный и не совпадает", async ({ page }) => {
    const signUp = new SignUpPage(page);
    const validPassword = "Quauto123";

    await signUp.password.fill(validPassword);
    await signUp.fillRepeatPassword("Quauto666");

    await signUp.expectError(signUp.repeatPassword, "Passwords do not match");

    await signUp.fillRepeatPassword("");
    await signUp.expectError(signUp.repeatPassword, "Re-enter password required");
  });

  test("Успешная регистрация", async ({ page }) => {
    const signUp = new SignUpPage(page);
    const signIn = new SignInPage(page);

    const validPassword = "Qauto123";
    const email = `aqa-${faker.string.alphanumeric(8)}@gmail.com`;

    await signUp.fillForm({
      name: "Test",
      lastName: "User",
      email,
      password: validPassword,
      repeatPassword: validPassword,
    });

    await signUp.register();

    await expect(page.getByText(" My profile ")).toBeVisible();

    await page.getByText(" My profile ").click();
    await page.getByText("Logout").click();

    await expect(page.getByText("Sign In")).toBeVisible();

    await signIn.open();
    await signIn.login(email, validPassword);

    await expect(page.getByText(" My profile ")).toBeVisible();
  });
});
