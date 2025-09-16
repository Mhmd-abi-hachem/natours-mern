import React, { useState } from "react";

import Button from "../../shared/ui/Button";
import { useAuthStatus } from "./useAuthStatus";

function UpdatUserDataForm({ handleChange, updateUserData, isUpdatingData }) {
  const { authStatus } = useAuthStatus();
  const [userData, setUserData] = useState({
    name: authStatus.user.name,
    email: authStatus.user.email,
  });

  function handleUpdateUserInfo(e) {
    e.preventDefault();
    updateUserData({ name: userData.name, email: userData.email });
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={handleUpdateUserInfo}>
      <div className="flex flex-col gap-4">
        <label className="block text-[1.75rem] font-bold" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          className="form__input"
          type="text"
          value={userData.name}
          required
          name="name"
          onChange={(e) => handleChange(e, setUserData)}
        />
      </div>

      <div className="flex flex-col gap-4 ">
        <label className="block text-[1.75rem] font-bold" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          className="form__input"
          type="email"
          value={userData.email}
          required
          name="email"
          onChange={(e) => handleChange(e, setUserData)}
        />
      </div>

      <div className="mt-2">
        <Button size="medium" variation="primary" type="submit">
          {isUpdatingData ? "Saving..." : "Update Info"}
        </Button>
      </div>
    </form>
  );
}

export default UpdatUserDataForm;
