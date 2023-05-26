import { useDispatch } from "react-redux";
import { clearCart } from "../feature/cart/cartSlice";
import { openModal, closeModal } from "../feature/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart ?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn comfirm-btn"
            onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn cancel-btn"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
