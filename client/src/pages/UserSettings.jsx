import React from "react";

import UserMenu from "../shared/ui/UserMenu";
import UserViewContent from "../shared/ui/UserViewContent";

function UserSettings() {
  // Input fields onChange handler fn
  function handleChange(e, stateToUpdate) {
    stateToUpdate((userData) => ({
      ...userData,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <section className="py-8 sm:py-12 md:py-24">
      <div className="user-view flex flex-col md:flex-row w-full">
        <UserMenu />
        <UserViewContent handleChange={handleChange} />
      </div>
    </section>
  );
}

export default UserSettings;
