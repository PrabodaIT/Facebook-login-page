import React, { useState } from 'react';

interface LoginFormProps {}

interface FormState {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [formState, setFormState] = useState<FormState>({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Submitting form with email:', formState.email, 'and password:', formState.password);
  };

  return (
    <form onSubmit={handleSubmit} className="facebook-login-form">
      {/* Facebook logo and title */}
      <div className="facebook-logo">
        <img src="facebook-logo.png" alt="Facebook" />
      </div>
      <h1 className="facebook-title">Facebook helps you connect and share with the people in your life.</h1>

      {/* Email input */}
      <input
        type="email"
        className="email-input"
        placeholder="Email address or phone number"
        value={formState.email}
        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
      />

      {/* Password input */}
      <input
        type="password"
        className="password-input"
        placeholder="Password"
        value={formState.password}
        onChange={(e) => setFormState({ ...formState, password: e.target.value })}
      />

      {/* Login button */}
      <button type="submit" className="login-button">
        Log in
      </button>

      {/* Forgot password link */}
      <a href="#" className="forgot-password">
        Forgotten password?
      </a>

      {/* Create new account link */}
      <a href="#" className="create-new-account">
        Create new account
      </a>

      {/* Create a Page link */}
      <a href="#" className="create-page">
        Create a Page for a celebrity, brand or business.
      </a>
    </form>
  );
};

export default LoginForm;