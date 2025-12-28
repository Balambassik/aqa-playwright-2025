import { expect } from "@playwright/test";

export class SignUpPage {
  constructor(page) {
    this.page = page;

    this.name = page.locator("#signupName");
    this.lastName = page.locator("#signupLastName");
    this.email = page.locator("#signupEmail");
    this.password = page.locator("#signupPassword");
    this.repeatPassword = page.locator("#signupRepeatPassword");
    this.registerBtn = page.getByText("Register");
  }

  async blurAllFields() {
    await this.name.focus();
    await this.name.blur();

    await this.lastName.focus();
    await this.lastName.blur();

    await this.email.focus();
    await this.email.blur();

    await this.password.focus();
    await this.password.blur();

    await this.repeatPassword.focus();
    await this.repeatPassword.blur();
  }

  async fillName(value) {
    await this.name.fill(value);
    await this.name.blur();
  }

  async fillLastName(value) {
    await this.lastName.fill(value);
    await this.lastName.blur();
  }

  async fillEmail(value) {
    await this.email.fill(value);
    await this.email.blur();
  }

  async fillPassword(value) {
    await this.password.fill(value);
    await this.password.blur();
  }

  async fillRepeatPassword(value) {
    await this.repeatPassword.fill(value);
    await this.repeatPassword.blur();
  }

  async fillForm({ name, lastName, email, password, repeatPassword }) {
    await this.name.fill(name);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.repeatPassword.fill(repeatPassword);
  }

  async register() {
    await this.registerBtn.click();
  }

  async expectError(locator, text) {
    await expect(locator.locator("..")).toContainText(text);
    await expect(locator).toHaveClass(/is-invalid/);
  }
}
