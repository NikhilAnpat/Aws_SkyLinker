import React, { useState } from "react";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleResetPassword = () => {
    // Add validation logic here to check if newPassword and confirmPassword match,
    // and if they meet your password criteria.

    if (newPassword === confirmPassword) {
      // Send a request to your backend to update the user's password
      // You may use an API endpoint for this purpose.

      // If the password reset is successful, you can display a success message.
      setSuccessMessage("Password reset successful!");
    } else {
      setPasswordError("Passwords do not match.");
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <p className="error-message">{passwordError}</p>
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ResetPassword;
