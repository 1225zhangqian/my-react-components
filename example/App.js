import React from 'react';
import ModalExample from './modalExample';
import NotificationExample from './notificationExample';
import ToolTipExample from './toolTipExample';
import '../style';
class App extends React.Component {
  render() {
    return (
      <div>
        <ModalExample />
        <NotificationExample />
        <ToolTipExample />
      </div>
    );
  }
}

export default App;
