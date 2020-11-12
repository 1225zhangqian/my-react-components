import React, { Component } from "react";
import Modal from '../components/modal'
import { Button } from 'reactstrap'
class ModalExample extends Component {
  state = { visible: false, backdrop: "static" };
  showModal = i => {
    if (i) {
      Modal[i.type]({
        content: `${i.type}...`,
        centered: true
      });
    } else {
      this.toggle();
    }
  };
  handleOk = () => {
    this.toggle();
  };
  handleCancel = () => {
    this.toggle();
  };
  toggle = () => {
    this.setState({ visible: !this.state.visible });
  };
  change = i => {
    this.setState({ backdrop: i.value });
  };
  render() {
    const modalList = [
      { type: "confirm" },
      { type: "success" },
      { type: "error" },
      { type: "warning" },
      { type: "info" }
    ];
    return (
      <div>
        <p>Basic modal</p>
        <Button onClick={() => this.showModal()}>Open Modal</Button>
        <hr />
        <p>Information modal dialog</p>
        {modalList.map((i, index) => (
          <span key={index}>
            <Button onClick={() => this.showModal(i)}>{i.type}</Button>
            &nbsp;
          </span>
        ))}
        <hr />
        <Button onClick={() => this.showModal()}>Open Modal</Button>
        <hr />
        <Modal
          title="Basic Modal"
          isOpen={this.state.visible}
          toggle={this.toggle}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          backdrop={this.state.backdrop}
        >
          This is a basic dialog.
        </Modal>
      </div>
    );
  }
}

export default ModalExample
