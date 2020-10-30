import React from 'react';
import { Button } from 'reactstrap'
import { Notification } from '../components'
class NotificationExample extends React.Component {
  onClick = (type) => {
    Notification[type]({
      message: type,
      description: `description--${type}`,
      duration: 0
    })

    Notification[type]({
      message: type,
      description: `description--${type}`,
      placement: 'topLeft'
    })

    Notification[type]({
      message: type,
      description: `description--${type}`,
      placement: 'topRight'
    })
  }
  render() {
    return (
      <div>
        <Button onClick={() => this.onClick('info')}>click me -info</Button>
        <Button onClick={() => this.onClick('success')}>click me -success</Button>
        <Button onClick={() => this.onClick('warning')}>click me -warning</Button>
        <Button onClick={() => this.onClick('error')}>click me -error</Button>
      </div>
    )
  }
}

export default NotificationExample;