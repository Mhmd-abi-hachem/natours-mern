import React from "react";
import { HiOutlineTrash } from "react-icons/hi2";

import Modal from "./Modal";
import Button from "./Button";

function DeleteAccountModal({ onClose, onDelete, isModalOpen }) {
  return (
    <Modal onClickOverlay={onClose} isModalOpen={isModalOpen}>
      <button
        onClick={onClose}
        className="absolute top-2 right-4 sm:right-6 md:right-8 bg-none border-none text-7xl text-[#999] cursor-pointer "
      >
        &times;
      </button>
      <div className="px-4 py-2  md:px-8 md:py-4 flex flex-col gap-8 sm:gap-12 md:gap-16">
        <h2 className="text-6xl font-semibold mb-24 text-[#55c57a] leading-20 tracking-wide">
          Are you sure you want to delete your account?
        </h2>
        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
          <Button variation="cancel" onClick={onClose}>
            Cancel
          </Button>

          <Button variation="alert" onClick={onDelete}>
            <div className="flex items-center">
              <HiOutlineTrash className="w-[2.2rem] h-[2.2rem] inline-block mr-4" />
              Delete my account
            </div>
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteAccountModal;
