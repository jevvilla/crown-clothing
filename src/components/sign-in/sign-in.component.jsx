import React from "react";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils.js";

import {
  SigninContainer,
  SigninTitle,
  ButtonsBarContainer,
} from "./sign-in.styles";

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <SigninContainer>
        <SigninTitle>I already have an account</SigninTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            label="Email"
            handleChange={this.handleChange}
            autoComplete="none"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SigninContainer>
    );
  }
}

export default SignIn;
