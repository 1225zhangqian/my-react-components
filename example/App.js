import React from 'react';
import ModalExample from './modalExample'
import NotificationExample from './notificationExample'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/index.scss'
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