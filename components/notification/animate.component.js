import React, { Component } from 'react';
// import { Fade } from 'reactstrap';
import { Transition } from 'react-transition-group';
export default class Animate extends Component {
  onExited = () => {
    this.props.onExited()
  }
  render() {
    const prefixCls = this.props.className
    const componentClass = `${prefixCls}-fade`
    return (

      <Transition
        in={this.props.fadein}
        onExited={this.onExited}
        unmountOnExit={false}
        timeout={300}
        appear={true}
      >
        {state => (<div className={`${componentClass}  fade-${state}`}>
          {this.props.children}
        </div>)}

      </Transition  >

    );
  }
}