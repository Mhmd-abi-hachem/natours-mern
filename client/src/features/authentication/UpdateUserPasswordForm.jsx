import React, { useState } from "react";

import Button from "../../shared/ui/Button";

function UpdateUserPasswordForm({
  updateUserPassword,
  handleChange,
  isUpdatingPassword,
}) {
  const [userPasswordData, setUserPasswordData] = useState({
    passwordCurrent: "",
    password: "",
    passwordConfirm: "",
  });

  function handleUpdateUserPassword(e) {
    e.preventDefault();
    updateUserPassword(
      {
        passwordCurrent: userPasswordData.passwordCurrent,
        password: userPasswordData.password,
        passwordConfirm: userPasswordData.passwordConfirm,
      },
      {
        onSuccess: () => {
          // reset form fields only after success
          setUserPasswordData({
            passwordCurrent: "",
            password: "",
            passwordConfirm: "",
          });
        },
      }
    );
  }

  return (
    <form className="flex flex-col gap-8 " onSubmit={handleUpdateUserPassword}>
      <div className="flex flex-col gap-4">
        <label
          className="block text-[1.75rem] font-bold"
          htmlFor="password-current"
        >
          Current password
        </label>
        <input
          id="password-current"
          className="form__input"
          type="password"
          placeholder="••••••••"
          required
          name="passwordCurrent"
          onChange={(e) => handleChange(e, setUserPasswordData)}
          value={userPasswordData.passwordCurrent}
          minLength={8}
        />
      </div>

      <div className="flex flex-col gap-4">
        <label className="block text-[1.75rem] font-bold" htmlFor="password">
          New password
        </label>
        <input
          id="password"
          className="form__input"
          type="password"
          placeholder="••••••••"
          name="password"
          required
          onChange={(e) => handleChange(e, setUserPasswordData)}
          value={userPasswordData.password}
          minLength={8}
        />
      </div>

      <div className="flex flex-col gap-4">
        <label
          className="block text-[1.75rem] font-bold"
          htmlFor="password-confirm"
        >
          Confirm password
        </label>
        <input
          id="password-confirm"
          className="form__input"
          type="password"
          name="passwordConfirm"
          placeholder="••••••••"
          required
          value={userPasswordData.passwordConfirm}
          onChange={(e) => handleChange(e, setUserPasswordData)}
          minLength={8}
        />
      </div>

      <div className="mt-2">
        <Button size="medium" type="submit">
          {isUpdatingPassword ? "Saving..." : "Save password"}
        </Button>
      </div>
    </form>
  );
}

export default UpdateUserPasswordForm;
