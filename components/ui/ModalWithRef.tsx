import React, { useEffect, forwardRef } from "react";
import { X } from "lucide-react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ onClose, children }, ref) => {
    useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if ((e.target as HTMLElement).id === "modal-backdrop") onClose();
    };

    return (
      <div
        id="modal-backdrop"
        onClick={handleBackdropClick}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm"
        aria-modal="true"
        role="dialog"
      >
        <div
          ref={ref}
          className="relative bg-white rounded-lg w-full max-w-3xl shadow-xl overflow-hidden z-55"
          style={{ maxHeight: "90vh", overflowY: "auto" }} // Limit height and allow scrolling
          tabIndex={-1} // Make it focusable
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 hover:rounded-full hover:bg-gray-200 p-4"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="p-6">{children}</div>
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";
