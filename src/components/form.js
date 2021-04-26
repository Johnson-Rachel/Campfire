import { useForm } from "react-cool-form";
import React, { Component } from "react";
import '../App.css';
import "./form.scss";
import logo from '../logo.png';

const AppForm = () => {
  const { form, getState } = useForm({
    // (Strongly advise) Provide the default values just like we use React state
    defaultValues: { email: "", password: "" },
    // The event only triggered when the form is valid
    onSubmit: (values) => console.log("onSubmit: ", values),
  });
  const errors = getState("errors", { filterUntouchedError: true });

  return (
    <form ref={form} noValidate>
      <div>
        <img className="logo" src={logo}></img>
        <input name="email" type="email" placeholder="Email" required />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={6}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <input type="submit" />
    </form>
  );
};

export default AppForm;