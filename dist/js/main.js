"use strict";

new PhoneValidator({
  selector: "[data-validate-phone]",
  nonAmerican: true,
  errorMessage: "invalid phone number!"
});
new EmailValidator({
  selector: "[data-validate-email]",
  errorMessage: "invalid email!"
});
new NameValidator({
  selector: "[data-validate-name]",
  errorMessage: "invalid name!"
});
//# sourceMappingURL=main.js.map
