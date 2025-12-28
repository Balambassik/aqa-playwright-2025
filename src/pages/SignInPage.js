export class SignInPage {
    constructor(page) {
      this.page = page;
  
      this.signInBtn = page.getByText("Sign In");
      this.emailInput = page.locator("#signinEmail");
      this.passwordInput = page.locator("#signinPassword");
      this.loginBtn = page.getByText("Login");
    }
  
    async open() {
      await this.signInBtn.click();
    }
  
    async login(email, password) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.loginBtn.click();
    }
  }
  