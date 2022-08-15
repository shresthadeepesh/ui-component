import "./style.scss";
import React, { FC } from "react";
import RenderIf from "../RenderIf";
import useEscapeKey from "../../hooks/useEscapeKey";

export interface ModalProps {
  /**
   * Should the modal be visible?
   */
  isVisible: boolean;
  /**
   * What the modal should do when closed?
   */
  onClose: () => void;
  /**
   * Modal header
   */
  header?: React.ReactElement | string;
  /**
   * Modal contents
   */
  body?: React.ReactElement;
  /**
   * Modal Footer
   */
  footer?: React.ReactElement;
  /**
   * Should the modal be closeable?
   */
  closeable?: boolean;
  /**
   * Should the modal be close on pressing escape?
   */
  closeOnEscape?: boolean;
}

/**
 * A Modal for popping out.
 */
export const Modal: FC<ModalProps> = ({
  isVisible,
  onClose,
  header,
  body,
  footer,
  closeable = true,
  closeOnEscape = true,
}) => {
  useEscapeKey(onClose, closeOnEscape, closeable);
  return (
    <RenderIf condition={isVisible}>
      <div className="modal-container">
        <div className="modal">
          <RenderIf condition={closeable}>
            <div className="modal-header">
              <div className="">{header}</div>
              <div className="close">
                <button onClick={onClose}>&times;</button>
              </div>
            </div>
          </RenderIf>
          <div className="modal-body">{body}</div>
          <RenderIf condition={!!footer}>
            <div className="modal-footer">{footer}</div>
          </RenderIf>
        </div>
      </div>
    </RenderIf>
  );
};

export default Modal;
