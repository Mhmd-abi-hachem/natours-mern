import React, { useState } from "react";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";
import { HiOutlineUserMinus } from "react-icons/hi2";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

import DeleteAccountModal from "./DeleteAccountModal";
import { useDeleteAccount } from "../../features/authentication/useDeleteAccount";
import NavItem from "./NavItem";
import NavItemButton from "./NavItemButton";

function UserMenu() {
  const [showAlertModal, setShowAlertModal] = useState(false);

  const { deleteAccount } = useDeleteAccount(setShowAlertModal);

  const handleToggleAlertModal = () => {
    setShowAlertModal((show) => !show);
  };

  return (
    <>
      <nav className="user-view__menu">
        <ul className="list-none flex flex-row md:flex-col justify-around md:justify-start gap-8 md:gap-16 text-2xl sm:text-3xl md:text-4xl">
          <NavItem
            text="Settings"
            icon={
              <HiOutlineCog6Tooth className="text-[#f7f7f7] w-10 h-10 md:w-14 md:h-14 " />
            }
          />
          <NavItem
            to="/"
            text="Explore Tours"
            icon={
              <HiOutlineGlobeAsiaAustralia className="text-[#f7f7f7] w-10 h-10 md:w-14 md:h-14 " />
            }
          />
          <NavItemButton
            text="Delete account"
            icon={
              <HiOutlineUserMinus className="text-[#f7f7f7] w-10 h-10 md:w-14 md:h-14 " />
            }
            onClick={handleToggleAlertModal}
          />
        </ul>
      </nav>

      {showAlertModal && (
        <DeleteAccountModal
          isModalOpen={showAlertModal}
          onClose={() => setShowAlertModal(false)}
          onDelete={deleteAccount}
        />
      )}
    </>
  );
}

export default UserMenu;
