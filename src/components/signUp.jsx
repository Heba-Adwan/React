
import React, { useState } from "react";


 function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [userData, setUserData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];
    if (!email.trim()) {
      newErrors.push("Email is required");
    }
    if (!password.trim()) {
      newErrors.push("Password is required");
    }
    if (!confirmPassword.trim()) {
      newErrors.push("Confirm password is required");
    }
    if (password.trim() && confirmPassword.trim() && password !== confirmPassword) {
      newErrors.push("Passwords do not match");
    }



    if (newErrors.length === 0) {
      const newUser = {
        email,
        password
      };
      setUserData([...userData, newUser]);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrors([]);
    } else {
      setErrors(newErrors);
    }
  };



  const handleDelete = (email) => {
    const filteredData = userData.filter((user) => user.email !== email);
    setUserData(filteredData);
  };

  return (
    <div className="SignUp">
      <h1>Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="addButton" type="submit">Sign Up</button>
      </form>


    </div>
  );
}


export default SignUp;