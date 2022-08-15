import "./style.scss";
import React, { FC } from "react";
import RenderIf from "../RenderIf";
import useEscapeKey from "../../hooks/useEscapeKey";

interface DrawerProps {
  isVisible: boolean;
  onClose: () => void;
  header?: React.ReactElement | string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  closeable?: boolean;
  closeOnEscape?: boolean;
}

const Drawer: FC<DrawerProps> = ({
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
      <div className="drawer-container">
        <div className="drawer">
          <RenderIf condition={closeable}>
            <div className="header">
              <div className="">{header}</div>
              <div className="close">
                <button onClick={onClose}>&times;</button>
              </div>
            </div>
          </RenderIf>
          <div className="body">{body}</div>
          <RenderIf condition={!!footer}>
            <div className="footer">{footer}</div>
          </RenderIf>
        </div>
      </div>
    </RenderIf>
  );
};

export default Drawer;
