
import {Component} from 'react';
import {connect} from 'react-redux';

import io from 'socket.io-client';

class SocketIOShell extends Component {
    socket;
    dispatch;

    componentDidMount() {
        this.dispatch = this.props.dispatch;

        this.socket = io.connect(`http://localhost:4000`);
        mapSocketToDispatch(this.socket, this.dispatch);
    }

    componentWillUnmount() {
        if (!!this.socket) {
            this.socket.disconnect();
        }
    }

    render() {
        return (
            {...this.props.children}
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

function mapSocketToDispatch(socket, dispatch) {
    socket.on('welcome', (res) => {
        console.log(res);
        socket.emit('welcome-ack', {message: 'hello from the client side'});
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(SocketIOShell);