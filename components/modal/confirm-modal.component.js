import React from "react";
import * as ReactDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const ModalLocale = {
  okText: "Ok",
  cancelText: "Cancel"
};
const ConfirmDialog = props => {
  let { prefixCls, okText, cancelText, okCancel, close, onOk, onCancel, onClose, title, ...restProps } = props
  prefixCls = prefixCls || 'IS-';
  okText = okText || ModalLocale.okText;
  cancelText = cancelText || ModalLocale.cancelText;
  okCancel = !!okCancel
  const handleOk = (e) => {
    if (onOk) {
      onOk(e);
    }
    close()
  }
  const handleCancel = (e) => {
    if (onCancel) {
      onCancel(e);

    }
    close()
  }
  const toggle = () => {
    if (onClose) {
      onClose();

    }
    close()

  }
  return (
    <Modal {...restProps} className={`${prefixCls}modal-wrap`}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{props.content}</ModalBody>
      <ModalFooter>
        {okCancel && <Button color="secondary" onClick={handleCancel}>
          {cancelText}
        </Button>}
        <Button color="primary" onClick={handleOk}>
          {okText}
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default function confirm(props) {
  const div = document.createElement("div");
  document.body.appendChild(div);
  let currentProps = { ...props, isOpen: true, close };
  function close() {
    currentProps = {
      ...currentProps,
      isOpen: false
    };
    render(currentProps);
    destroy(currentProps)
  }
  function destroy() {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  function render(props) {

    ReactDOM.render(
      <ConfirmDialog {...props} />, div);
  }
  render(currentProps);
}
