import React from "react";

import Spinner from "./Spinner";
import { useUpdatePassword } from "../../features/authentication/useUpdatePassword";
import { useUpdateUserData } from "../../features/authentication/useUpdateUserData";
import UpdateUserPasswordForm from "../../features/authentication/UpdateUserPasswordForm";
import UpdatUserDataForm from "../../features/authentication/UpdateUserDataForm";

function UserViewContent({ handleChange }) {
  const { updateUserPassword, isUpdatingPassword } = useUpdatePassword();
  const { updateUserData, isUpdatingData } = useUpdateUserData();

  const isUpdating = isUpdatingPassword || isUpdatingData;

  return (
    <div className="flex-1 py-12 sm:py-20 md:py-28">
      {isUpdating && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white/10 backdrop-blur-md z-[1000] transition-all duration-500">
          <div className="flex items-center justify-center h-full">
            <Spinner />
          </div>
        </div>
      )}

      <div className="max-w-[68rem] mx-auto  px-6 sm:px-12 md:px-20 lg:px-32 mt:4 md:mt-8">
        <h2 className="heading-secondary !mb-8 !leading-13">
          Your account settings
        </h2>

        <UpdatUserDataForm
          handleChange={handleChange}
          updateUserData={updateUserData}
          isUpdatingData={isUpdatingData}
        />
      </div>

      <div className="line">&nbsp;</div>

      <div className="max-w-[68rem] mx-auto  px-6 sm:px-12 md:px-20 lg:px-32 mt-8">
        <h2 className="heading-secondary !mb-8">Password change</h2>

        <UpdateUserPasswordForm
          updateUserPassword={updateUserPassword}
          handleChange={handleChange}
          isUpdatingPassword={isUpdatingPassword}
        />
      </div>
    </div>
  );
}

export default UserViewContent;
