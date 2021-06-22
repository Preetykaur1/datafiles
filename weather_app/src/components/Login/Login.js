import React from 'react';


class Login extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.show = this.show.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["firstName"] = "";
          fields["lastName"] = "";
          fields["gender"] = "";
          fields["address"] = "";
          fields["age"] = "";
          fields["status"] = "";
          fields["children"] = "";
          fields["checkbox"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    show() {
        return this.state.fields.status === 'married';
    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["firstName"]) {
        formIsValid = false;
        errors["firstName"] = "*Please enter your firstName.";
      }

      if (!fields["checkbox"]) {
        formIsValid = false;
        errors["checkbox"] = "*Please check the checkbox.";
      }

      if (!fields["lastName"]) {
        formIsValid = false;
        errors["lastName"] = "*Please enter your lastName.";
      }

      if (!fields["gender"]) {
        formIsValid = false;
        errors["gender"] = "*Please enter your gender.";
      }

      if (!fields["address"]) {
        formIsValid = false;
        errors["address"] = "*Please enter your address.";
      }

      if (typeof fields["firstName"] !== "undefined") {
        if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["firstName"] = "*Please enter alphabet characters only.";
        }
      }

      if (typeof fields["lastName"] !== "undefined") {
        if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["lastName"] = "*Please enter alphabet characters only.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Registration page</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>First Name</label>
        <input type="text" name="firstName" value={this.state.fields.firstName} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.firstName}</div>
        <label>Last Name</label>
        <input type="text" name="lastName" value={this.state.fields.lastName} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.lastName}</div>
        <label>Gender</label>
        <input type="text" name="gender" value={this.state.fields.gender} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.gender}</div>
        <label>Address</label>
        <input type="text" name="address" value={this.state.fields.address} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.address}</div>
        <label>Age</label>
        <input type="text" name="age" value={this.state.fields.age} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.age}</div>
        <label>Marital status:</label>
        <input type="text" name="status" value={this.state.fields.status} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.status}</div>
        <label>Children</label>
        <input type="text" name="children" hidden={this.show} value={this.state.fields.children} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.children}</div>
        <label>Terms and conditions</label>
        <input type="checkbox" name="checkbox" value={this.state.fields.checkbox} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.checkbox}</div>
        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
</div>

      );
  }
}

export default Login;