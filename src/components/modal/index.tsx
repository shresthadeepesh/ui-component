import "./style.scss";
import React, { FC } from "react";
import RenderIf from "../RenderIf";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  header?: React.ReactElement | string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  closeable?: boolean;
}

const Modal: FC<ModalProps> = ({
  isVisible,
  onClose,
  header,
  body,
  footer,
  closeable = true,
}) => {
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
