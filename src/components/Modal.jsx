const Modal = () => {
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart ?</h4>
        <div className="btn-container">
          <button type="button" className="btn comfirm-btn">
            confirm
          </button>
          <button type="button" className="btn cancel-btn">
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
