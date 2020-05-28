class PhoneValidator extends Validator {
  constructor(parameters) {
    super(parameters);
    console.log("PhoneValidator()", this.options);

    console.log("looking for non-american phones?", this.options.nonAmerican);
  }

  validate = (event) => {
    console.log("PhoneValidator.validate", event);
    const value = event.target.value;

    this.validateBefore(event);
    console.log("running validation for PhoneValidator", event);

    console.log("value", value);
    if (!value || /^\(?\d{3}\)?[\-\. ]?\d{3}[\-\. ]?\d{4}$/.test(value)) {
      this.isValid = true;
      console.log("valid phone number!");
    } else {
      this.isValid = false;
      console.log("not a valid phone number");
    }
    this.validateAfter(event);
  };
}
