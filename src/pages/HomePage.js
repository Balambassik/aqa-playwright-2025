export class HomePage {
    constructor(page) {
      this.page = page;
      this.signUpBtn = page.locator("button.hero-descriptor_btn");
    }
  
    async open() {
      await this.page.goto("/");
    }
  
    async clickSignUp() {
      await this.signUpBtn.click();
    }
  }