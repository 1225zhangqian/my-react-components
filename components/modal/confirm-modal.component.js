import React from "react";
import * as ReactDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const ModalLocale = {
  okText: "ok",
  cancelText: "cancel"
};
const ConfirmDialog = props => {
  const prefixCls = props.prefixCls || 'IS-';
  const okText = props.okText ? props.okText : ModalLocale.okText;
  const cancelText = props.cancelText ? props.cancelText : ModalLocale.cancelText;
  const okCancel = !props.okCancel ? props.okCancel : true
  const handleOk = (e) => {
    const onOk = props.onOk;
    if (onOk) {
      onOk(e);
    }
    props.close()
  }
  const handleCancel = (e) => {
    const onCancel = props.onCancel;
    if (onCancel) {
      onCancel(e);

    }
    props.close()
  }
  return (
    <Modal {...props} className={`${prefixCls}modal-wrap`}>
      <ModalHeader toggle={props.close}>{props.title}</ModalHeader>
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
    ReactDOM.render(<ConfirmDialog {...props} />, div);
  }
  render(currentProps);
}
