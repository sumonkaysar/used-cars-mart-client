const ConfirmationModal = ({title, message, successAction, modalData, successButton, successButtonClass, closeModal}) => {

  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="my-4">{message}</p>
          <div className="modal-action justify-start">
            <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className={`btn ${successButtonClass}`}>{successButton}</label>
            <label onClick={closeModal} htmlFor="confirmation-modal" className="btn btn-outline">Cancel</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
