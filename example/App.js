import React from 'react';
import ModalExample from './modalExample'
import NotificationExample from './notificationExample'
import '../style'
class App extends React.Component {

    render() {
        return (
            <div>
                <ModalExample />
                <NotificationExample />
            </div>
        )
    }
}

export default App;