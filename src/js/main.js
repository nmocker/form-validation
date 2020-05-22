new PhoneValidator({
  selector: "[data-validate-phone]",
  nonAmerican: true,
  errorMessage: "invalid phone number!",
});
