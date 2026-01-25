import React from "react";
import { useForm } from "react-hook-form";
import "./form.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  // ✅ onSubmit function
  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Form Submitted Successfully 🎉");

    reset(); // clear form after submit
  };

  return (
    <div className="container">
      <h2>Register Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Username */}
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            className={errors.username ? "error-input" : ""}
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters required",
              },
            })}
          />
          {errors.username && (
            <p className="error-text">{errors.username.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            className={errors.email ? "error-input" : ""}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="error-text">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            className={errors.password ? "error-input" : ""}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters required",
              },
            })}
          />
          {errors.password && (
            <p className="error-text">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default App;
