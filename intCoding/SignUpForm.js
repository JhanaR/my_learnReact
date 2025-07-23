import React, { useState } from "react";

function SignUpForm() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      alert("Please enter both email and password.");
      return;
    }
    alert("Logged in successfully!");
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>Log in with</h2>

        <div style={styles.socialButtons}>
          <button type="button" style={styles.googleBtn}>Google</button>
          <button type="button" style={styles.appleBtn}>Apple</button>
        </div>

        <div style={styles.divider}>or</div>

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
        />

        <a href="#" style={styles.forgot}>Forgot Password?</a>

        <button type="submit" style={styles.loginBtn}>Log In</button>

        <p style={styles.footerText}>
          Don’t have an account? <a href="#">Signup</a>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;

const styles = {
  container: {
    background: "linear-gradient(135deg, #5B2C6F, #7D3C98)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif"
  },
  form: {
    background: "#fff",
    padding: "30px 40px",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    width: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  heading: {
    textAlign: "center",
    fontSize: "20px",
    marginBottom: "10px"
  },
  socialButtons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center"
  },
  googleBtn: {
    background: "#fff",
    color: "#333",
    padding: "8px 12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    cursor: "pointer"
  },
  appleBtn: {
    background: "#000",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  },
  divider: {
    textAlign: "center",
    color: "#999"
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px"
  },
  forgot: {
    textAlign: "right",
    color: "#6c63ff",
    textDecoration: "none",
    fontSize: "13px"
  },
  loginBtn: {
    background: "#6c63ff",
    color: "#fff",
    padding: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  footerText: {
    fontSize: "13px",
    textAlign: "center",
    marginTop: "10px"
  }
};

