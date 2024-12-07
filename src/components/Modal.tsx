// import React from "react";

// interface ModalProps {
//   open: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
// }

// export default function Modal({ open, onClose, children }: ModalProps) {
//   return (
//     <div className={`${"modal"} ${open ? "display-block" : "display-none"}`}>
//       <div className="modal-main">
//         <div className="modal-head">
//           <h1>Modal</h1>
//         </div>
//         <div className="modal-body">{children}</div>
//         <div className="btn-container">
//           <button type="button" className="btn" onClick={onClose}>
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  return (
    <div className={`modal ${open ? "display-block" : "display-none"}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-main">
        <div className="modal-body">{children}</div>
        <div className="btn-container">
          <button type="button" className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
