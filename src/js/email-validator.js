class EmailValidator extends Validator {
  constructor(parameters) {
    super(parameters);
    console.log("EmailValidator()", this.options);
  }

  validate = (event) => {
    console.log("EmailValidator.validate", event);
    const value = event.target.value;

    this.validateBefore(event);
    console.log("running validation for EmailValidator", event);

    console.log("value", value);
    if (/\w+@\w+\.\w+/.test(value)) {
      this.isValid = true;
      console.log("valid email!");
    } else {
      this.isValid = false;
      console.log("not a valid email");
    }
    this.validateAfter(event);
  };
}
