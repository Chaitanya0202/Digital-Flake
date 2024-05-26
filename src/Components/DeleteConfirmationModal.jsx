import React from 'react';

const DeleteConfirmationModal = ({ isVisible, onClose, onConfirm }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">Delete Product</h2>
        <p className="text-center text-gray-500 mb-8">Are you sure you want to delete this product?</p>
       
        <div className="text-center mt-4">
          <button
            onClick={onClose}
            className="text-purple-600 text-sm border p-4 rounded-lg px-4 hover:bg-purple-800  hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="text-white text-sm border p-4 rounded-lg px-4 ml-4" style={{backgroundColor:"#662671"}}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
