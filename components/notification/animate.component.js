import React, { Component } from 'react';
// import { Fade } from 'reactstrap';
import { Transition } from 'react-transition-group';
export default class Animate extends Component {
  state = {
    fadeinenter: false,
    fadeoutenter: false
  }
  onEnter = () => {
    console.log('1')
    this.setState({ fadeinenter: true })
  }
  onEntered = () => {
    console.log('21')
    this.setState({ fadeinenter: false })
  }
  onExit = () => {
    console.log('3')
    this.setState({ fadeoutenter: true })
  }
  onExited = () => {
    console.log('4')
    this.props.onExited()
    this.setState({ fadeoutenter: false })
  }
  render() {
    const prefixCls = this.props.className
    const componentClass = `${prefixCls}-fade`
    return (

      <Transition
        in={this.props.fadein}
        onEnter={this.onEnter}
        onEntered={this.onEntered}
        onExit={this.onExit}
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